import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerLevelService } from "./customerLevel.service";
import { CustomerLevelControllerBase } from "./base/customerLevel.controller.base";

@swagger.ApiTags("customerLevels")
@common.Controller("customerLevels")
export class CustomerLevelController extends CustomerLevelControllerBase {
  constructor(
    protected readonly service: CustomerLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
