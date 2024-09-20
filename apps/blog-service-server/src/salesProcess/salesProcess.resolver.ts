import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalesProcessResolverBase } from "./base/salesProcess.resolver.base";
import { SalesProcess } from "./base/SalesProcess";
import { SalesProcessService } from "./salesProcess.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalesProcess)
export class SalesProcessResolver extends SalesProcessResolverBase {
  constructor(
    protected readonly service: SalesProcessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
