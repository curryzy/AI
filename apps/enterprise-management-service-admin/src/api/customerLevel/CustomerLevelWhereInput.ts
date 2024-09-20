import { CustomerInfoListRelationFilter } from "../customerInfo/CustomerInfoListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CustomerLevelWhereInput = {
  customerInfos?: CustomerInfoListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  level?: StringNullableFilter;
  potentialValue?: IntNullableFilter;
  transactionHistory?: StringNullableFilter;
};
