import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerSegmentResolverBase } from "./base/customerSegment.resolver.base";
import { CustomerSegment } from "./base/CustomerSegment";
import { CustomerSegmentService } from "./customerSegment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerSegment)
export class CustomerSegmentResolver extends CustomerSegmentResolverBase {
  constructor(
    protected readonly service: CustomerSegmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
