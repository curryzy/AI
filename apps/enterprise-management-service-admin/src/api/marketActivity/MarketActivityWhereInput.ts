import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MarketActivityWhereInput = {
  activityName?: StringNullableFilter;
  evaluation?: StringNullableFilter;
  id?: StringFilter;
  participants?: StringNullableFilter;
};
