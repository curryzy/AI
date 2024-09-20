import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerInfoService } from "./customerInfo.service";
import { CustomerInfoControllerBase } from "./base/customerInfo.controller.base";

@swagger.ApiTags("customerInfos")
@common.Controller("customerInfos")
export class CustomerInfoController extends CustomerInfoControllerBase {
  constructor(
    protected readonly service: CustomerInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
