import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuotationModuleBase } from "./base/quotation.module.base";
import { QuotationService } from "./quotation.service";
import { QuotationController } from "./quotation.controller";
import { QuotationResolver } from "./quotation.resolver";

@Module({
  imports: [QuotationModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuotationController],
  providers: [QuotationService, QuotationResolver],
  exports: [QuotationService],
})
export class QuotationModule {}
