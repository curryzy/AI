import { Module } from "@nestjs/common";
import { ProductInventoryManagementModuleService } from "./productinventorymanagementmodule.service";
import { ProductInventoryManagementModuleController } from "./productinventorymanagementmodule.controller";
import { ProductInventoryManagementModuleResolver } from "./productinventorymanagementmodule.resolver";

@Module({
  controllers: [ProductInventoryManagementModuleController],
  providers: [
    ProductInventoryManagementModuleService,
    ProductInventoryManagementModuleResolver
  ],
  exports: [ProductInventoryManagementModuleService],
})
export class ProductInventoryManagementModuleModule {}
