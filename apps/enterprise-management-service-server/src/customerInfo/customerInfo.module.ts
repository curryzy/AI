import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerInfoModuleBase } from "./base/customerInfo.module.base";
import { CustomerInfoService } from "./customerInfo.service";
import { CustomerInfoController } from "./customerInfo.controller";
import { CustomerInfoResolver } from "./customerInfo.resolver";

@Module({
  imports: [CustomerInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerInfoController],
  providers: [CustomerInfoService, CustomerInfoResolver],
  exports: [CustomerInfoService],
})
export class CustomerInfoModule {}
