import { EmailCampaignWhereInput } from "./EmailCampaignWhereInput";
import { EmailCampaignOrderByInput } from "./EmailCampaignOrderByInput";

export type EmailCampaignFindManyArgs = {
  where?: EmailCampaignWhereInput;
  orderBy?: Array<EmailCampaignOrderByInput>;
  skip?: number;
  take?: number;
};
