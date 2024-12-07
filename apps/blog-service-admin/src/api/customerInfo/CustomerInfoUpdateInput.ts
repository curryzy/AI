import { CustomerLevelWhereUniqueInput } from "../customerLevel/CustomerLevelWhereUniqueInput";

export type CustomerInfoUpdateInput = {
  address?: string | null;
  contactInfo?: string | null;
  customerLevel?: CustomerLevelWhereUniqueInput | null;
  interactionHistory?: string | null;
  name?: string | null;
};
