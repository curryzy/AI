import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmailCampaignService } from "./emailCampaign.service";
import { EmailCampaignControllerBase } from "./base/emailCampaign.controller.base";

@swagger.ApiTags("emailCampaigns")
@common.Controller("emailCampaigns")
export class EmailCampaignController extends EmailCampaignControllerBase {
  constructor(
    protected readonly service: EmailCampaignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
