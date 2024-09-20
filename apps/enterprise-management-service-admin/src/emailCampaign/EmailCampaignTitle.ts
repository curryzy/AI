import { EmailCampaign as TEmailCampaign } from "../api/emailCampaign/EmailCampaign";

export const EMAILCAMPAIGN_TITLE_FIELD = "status";

export const EmailCampaignTitle = (record: TEmailCampaign): string => {
  return record.status?.toString() || String(record.id);
};
