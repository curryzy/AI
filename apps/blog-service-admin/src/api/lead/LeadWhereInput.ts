import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  conversionRate?: FloatNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  leadSource?: StringNullableFilter;
  status?: StringNullableFilter;
};
