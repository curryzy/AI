import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailCampaignServiceBase } from "./base/emailCampaign.service.base";

@Injectable()
export class EmailCampaignService extends EmailCampaignServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
