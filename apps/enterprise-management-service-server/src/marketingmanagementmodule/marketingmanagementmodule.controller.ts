import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MarketingManagementModuleService } from "./marketingmanagementmodule.service";

@swagger.ApiTags("marketingManagementModules")
@common.Controller("marketingManagementModules")
export class MarketingManagementModuleController {
  constructor(protected readonly service: MarketingManagementModuleService) {}
}
