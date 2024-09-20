import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SaleOpportunityResolverBase } from "./base/saleOpportunity.resolver.base";
import { SaleOpportunity } from "./base/SaleOpportunity";
import { SaleOpportunityService } from "./saleOpportunity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SaleOpportunity)
export class SaleOpportunityResolver extends SaleOpportunityResolverBase {
  constructor(
    protected readonly service: SaleOpportunityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
