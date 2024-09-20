import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductInventoryManagementModuleService } from "./productinventorymanagementmodule.service";

@swagger.ApiTags("productInventoryManagementModules")
@common.Controller("productInventoryManagementModules")
export class ProductInventoryManagementModuleController {
  constructor(protected readonly service: ProductInventoryManagementModuleService) {}
}
