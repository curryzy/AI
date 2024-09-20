import { Module } from "@nestjs/common";
import { MarketingManagementModuleService } from "./marketingmanagementmodule.service";
import { MarketingManagementModuleController } from "./marketingmanagementmodule.controller";
import { MarketingManagementModuleResolver } from "./marketingmanagementmodule.resolver";

@Module({
  controllers: [MarketingManagementModuleController],
  providers: [MarketingManagementModuleService, MarketingManagementModuleResolver],
  exports: [MarketingManagementModuleService],
})
export class MarketingManagementModuleModule {}
