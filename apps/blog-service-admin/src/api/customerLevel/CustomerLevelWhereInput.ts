import { CustomerInfoListRelationFilter } from "../customerInfo/CustomerInfoListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerLevelWhereInput = {
  customerInfos?: CustomerInfoListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  level?: StringNullableFilter;
};
