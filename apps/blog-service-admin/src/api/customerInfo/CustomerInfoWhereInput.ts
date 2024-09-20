import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerLevelWhereUniqueInput } from "../customerLevel/CustomerLevelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CustomerInfoWhereInput = {
  address?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
  customerLevel?: CustomerLevelWhereUniqueInput;
  id?: StringFilter;
  interactionHistory?: StringNullableFilter;
  name?: StringNullableFilter;
};
