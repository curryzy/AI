import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  inventoryStatus?: string | null;
  price?: number | null;
  productName?: string | null;
  specifications?: string | null;
};
