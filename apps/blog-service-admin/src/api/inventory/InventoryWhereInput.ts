import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  incomingDate?: DateTimeNullableFilter;
  inventoryCount?: IntNullableFilter;
  outgoingDate?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
  warehouseLocation?: StringNullableFilter;
};
