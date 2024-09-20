import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmailCampaignModuleBase } from "./base/emailCampaign.module.base";
import { EmailCampaignService } from "./emailCampaign.service";
import { EmailCampaignController } from "./emailCampaign.controller";
import { EmailCampaignResolver } from "./emailCampaign.resolver";

@Module({
  imports: [EmailCampaignModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmailCampaignController],
  providers: [EmailCampaignService, EmailCampaignResolver],
  exports: [EmailCampaignService],
})
export class EmailCampaignModule {}
