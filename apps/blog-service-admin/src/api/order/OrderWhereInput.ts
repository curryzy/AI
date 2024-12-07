import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  confirmation?: BooleanNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  orderStatus?: StringNullableFilter;
  orderTracking?: StringNullableFilter;
  payment?: BooleanNullableFilter;
  shippingInfo?: StringNullableFilter;
};
