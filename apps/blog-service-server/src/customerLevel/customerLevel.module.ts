import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerLevelModuleBase } from "./base/customerLevel.module.base";
import { CustomerLevelService } from "./customerLevel.service";
import { CustomerLevelController } from "./customerLevel.controller";
import { CustomerLevelResolver } from "./customerLevel.resolver";

@Module({
  imports: [CustomerLevelModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerLevelController],
  providers: [CustomerLevelService, CustomerLevelResolver],
  exports: [CustomerLevelService],
})
export class CustomerLevelModule {}
