import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerLevelResolverBase } from "./base/customerLevel.resolver.base";
import { CustomerLevel } from "./base/CustomerLevel";
import { CustomerLevelService } from "./customerLevel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerLevel)
export class CustomerLevelResolver extends CustomerLevelResolverBase {
  constructor(
    protected readonly service: CustomerLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
