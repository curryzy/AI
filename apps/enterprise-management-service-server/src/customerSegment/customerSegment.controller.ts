import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerSegmentService } from "./customerSegment.service";
import { CustomerSegmentControllerBase } from "./base/customerSegment.controller.base";

@swagger.ApiTags("customerSegments")
@common.Controller("customerSegments")
export class CustomerSegmentController extends CustomerSegmentControllerBase {
  constructor(
    protected readonly service: CustomerSegmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
