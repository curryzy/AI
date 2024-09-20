import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MarketActivityModuleBase } from "./base/marketActivity.module.base";
import { MarketActivityService } from "./marketActivity.service";
import { MarketActivityController } from "./marketActivity.controller";
import { MarketActivityResolver } from "./marketActivity.resolver";

@Module({
  imports: [MarketActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [MarketActivityController],
  providers: [MarketActivityService, MarketActivityResolver],
  exports: [MarketActivityService],
})
export class MarketActivityModule {}
