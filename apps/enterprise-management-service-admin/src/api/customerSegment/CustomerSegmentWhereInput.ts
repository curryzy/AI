import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerSegmentWhereInput = {
  criteria?: StringNullableFilter;
  id?: StringFilter;
  segmentName?: StringNullableFilter;
};
