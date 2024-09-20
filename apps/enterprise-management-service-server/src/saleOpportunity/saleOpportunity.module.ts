import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SaleOpportunityModuleBase } from "./base/saleOpportunity.module.base";
import { SaleOpportunityService } from "./saleOpportunity.service";
import { SaleOpportunityController } from "./saleOpportunity.controller";
import { SaleOpportunityResolver } from "./saleOpportunity.resolver";

@Module({
  imports: [SaleOpportunityModuleBase, forwardRef(() => AuthModule)],
  controllers: [SaleOpportunityController],
  providers: [SaleOpportunityService, SaleOpportunityResolver],
  exports: [SaleOpportunityService],
})
export class SaleOpportunityModule {}
