import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomerManagementModuleService } from "./customermanagementmodule.service";

@swagger.ApiTags("customerManagementModules")
@common.Controller("customerManagementModules")
export class CustomerManagementModuleController {
  constructor(protected readonly service: CustomerManagementModuleService) {}
}
