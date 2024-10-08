/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Contract } from "./Contract";
import { ContractCountArgs } from "./ContractCountArgs";
import { ContractFindManyArgs } from "./ContractFindManyArgs";
import { ContractFindUniqueArgs } from "./ContractFindUniqueArgs";
import { CreateContractArgs } from "./CreateContractArgs";
import { UpdateContractArgs } from "./UpdateContractArgs";
import { DeleteContractArgs } from "./DeleteContractArgs";
import { SaleOpportunity } from "../../saleOpportunity/base/SaleOpportunity";
import { ContractService } from "../contract.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Contract)
export class ContractResolverBase {
  constructor(
    protected readonly service: ContractService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "any",
  })
  async _contractsMeta(
    @graphql.Args() args: ContractCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Contract])
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "any",
  })
  async contracts(
    @graphql.Args() args: ContractFindManyArgs
  ): Promise<Contract[]> {
    return this.service.contracts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Contract, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "read",
    possession: "own",
  })
  async contract(
    @graphql.Args() args: ContractFindUniqueArgs
  ): Promise<Contract | null> {
    const result = await this.service.contract(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contract)
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "create",
    possession: "any",
  })
  async createContract(
    @graphql.Args() args: CreateContractArgs
  ): Promise<Contract> {
    return await this.service.createContract({
      ...args,
      data: {
        ...args.data,

        saleOpportunity: args.data.saleOpportunity
          ? {
              connect: args.data.saleOpportunity,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contract)
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "update",
    possession: "any",
  })
  async updateContract(
    @graphql.Args() args: UpdateContractArgs
  ): Promise<Contract | null> {
    try {
      return await this.service.updateContract({
        ...args,
        data: {
          ...args.data,

          saleOpportunity: args.data.saleOpportunity
            ? {
                connect: args.data.saleOpportunity,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Contract)
  @nestAccessControl.UseRoles({
    resource: "Contract",
    action: "delete",
    possession: "any",
  })
  async deleteContract(
    @graphql.Args() args: DeleteContractArgs
  ): Promise<Contract | null> {
    try {
      return await this.service.deleteContract(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SaleOpportunity, {
    nullable: true,
    name: "saleOpportunity",
  })
  @nestAccessControl.UseRoles({
    resource: "SaleOpportunity",
    action: "read",
    possession: "any",
  })
  async getSaleOpportunity(
    @graphql.Parent() parent: Contract
  ): Promise<SaleOpportunity | null> {
    const result = await this.service.getSaleOpportunity(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
