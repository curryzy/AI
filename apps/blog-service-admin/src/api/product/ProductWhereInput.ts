import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  inventoryStatus?: StringNullableFilter;
  price?: FloatNullableFilter;
  productName?: StringNullableFilter;
  specifications?: StringNullableFilter;
};
