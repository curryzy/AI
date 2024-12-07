import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SalesManagementModuleService } from "./salesmanagementmodule.service";

@swagger.ApiTags("salesManagementModules")
@common.Controller("salesManagementModules")
export class SalesManagementModuleController {
  constructor(protected readonly service: SalesManagementModuleService) {}
}
