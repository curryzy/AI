import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerInfoResolverBase } from "./base/customerInfo.resolver.base";
import { CustomerInfo } from "./base/CustomerInfo";
import { CustomerInfoService } from "./customerInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerInfo)
export class CustomerInfoResolver extends CustomerInfoResolverBase {
  constructor(
    protected readonly service: CustomerInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
