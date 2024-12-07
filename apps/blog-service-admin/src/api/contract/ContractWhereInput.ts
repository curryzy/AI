import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContractWhereInput = {
  contractDetails?: StringNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  validityPeriod?: DateTimeNullableFilter;
};
