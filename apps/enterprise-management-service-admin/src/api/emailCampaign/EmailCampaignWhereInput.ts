import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailCampaignWhereInput = {
  campaignDetails?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
};
