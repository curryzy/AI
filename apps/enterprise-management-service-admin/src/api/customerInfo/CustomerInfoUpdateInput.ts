import { CustomerLevelWhereUniqueInput } from "../customerLevel/CustomerLevelWhereUniqueInput";

export type CustomerInfoUpdateInput = {
  address?: string | null;
  communicationContent?: string | null;
  companyInfo?: string | null;
  contactInfo?: string | null;
  customerLevel?: CustomerLevelWhereUniqueInput | null;
  followUpLogs?: string | null;
  name?: string | null;
};
