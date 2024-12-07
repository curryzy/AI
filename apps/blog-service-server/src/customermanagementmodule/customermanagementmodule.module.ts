import { Module } from "@nestjs/common";
import { CustomerManagementModuleService } from "./customermanagementmodule.service";
import { CustomerManagementModuleController } from "./customermanagementmodule.controller";
import { CustomerManagementModuleResolver } from "./customermanagementmodule.resolver";

@Module({
  controllers: [CustomerManagementModuleController],
  providers: [CustomerManagementModuleService, CustomerManagementModuleResolver],
  exports: [CustomerManagementModuleService],
})
export class CustomerManagementModuleModule {}
