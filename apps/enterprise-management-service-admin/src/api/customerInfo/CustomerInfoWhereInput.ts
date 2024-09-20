import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerLevelWhereUniqueInput } from "../customerLevel/CustomerLevelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CustomerInfoWhereInput = {
  address?: StringNullableFilter;
  communicationContent?: StringNullableFilter;
  companyInfo?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
  customerLevel?: CustomerLevelWhereUniqueInput;
  followUpLogs?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
