import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  inventories?: InventoryUpdateManyWithoutProductsInput;
  inventoryStatus?: string | null;
  price?: number | null;
  productName?: string | null;
  specifications?: string | null;
};
