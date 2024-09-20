import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalesProcessService } from "./salesProcess.service";
import { SalesProcessControllerBase } from "./base/salesProcess.controller.base";

@swagger.ApiTags("salesProcesses")
@common.Controller("salesProcesses")
export class SalesProcessController extends SalesProcessControllerBase {
  constructor(
    protected readonly service: SalesProcessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
