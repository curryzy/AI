import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SalesProcessWhereInput = {
  customer?: StringNullableFilter;
  followUp?: DateTimeNullableFilter;
  id?: StringFilter;
  salesStage?: StringNullableFilter;
};
