import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerSegmentModuleBase } from "./base/customerSegment.module.base";
import { CustomerSegmentService } from "./customerSegment.service";
import { CustomerSegmentController } from "./customerSegment.controller";
import { CustomerSegmentResolver } from "./customerSegment.resolver";

@Module({
  imports: [CustomerSegmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerSegmentController],
  providers: [CustomerSegmentService, CustomerSegmentResolver],
  exports: [CustomerSegmentService],
})
export class CustomerSegmentModule {}
