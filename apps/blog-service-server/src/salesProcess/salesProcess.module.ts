import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalesProcessModuleBase } from "./base/salesProcess.module.base";
import { SalesProcessService } from "./salesProcess.service";
import { SalesProcessController } from "./salesProcess.controller";
import { SalesProcessResolver } from "./salesProcess.resolver";

@Module({
  imports: [SalesProcessModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalesProcessController],
  providers: [SalesProcessService, SalesProcessResolver],
  exports: [SalesProcessService],
})
export class SalesProcessModule {}
