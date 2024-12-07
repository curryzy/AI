import { Module } from "@nestjs/common";
import { SalesManagementModuleService } from "./salesmanagementmodule.service";
import { SalesManagementModuleController } from "./salesmanagementmodule.controller";
import { SalesManagementModuleResolver } from "./salesmanagementmodule.resolver";

@Module({
  controllers: [SalesManagementModuleController],
  providers: [SalesManagementModuleService, SalesManagementModuleResolver],
  exports: [SalesManagementModuleService],
})
export class SalesManagementModuleModule {}
