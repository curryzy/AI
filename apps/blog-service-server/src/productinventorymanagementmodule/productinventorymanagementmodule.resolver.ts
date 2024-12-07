import * as graphql from "@nestjs/graphql";
import { ProductInventoryManagementModuleService } from "./productinventorymanagementmodule.service";

export class ProductInventoryManagementModuleResolver {
  constructor(protected readonly service: ProductInventoryManagementModuleService) {}
}
