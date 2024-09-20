import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type QuotationWhereInput = {
  customer?: StringNullableFilter;
  id?: StringFilter;
  quotationDetails?: StringNullableFilter;
  validUntil?: DateTimeNullableFilter;
};
