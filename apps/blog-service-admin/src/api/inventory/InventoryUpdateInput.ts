import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  incomingDate?: Date | null;
  inventoryCount?: number | null;
  outgoingDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  warehouseLocation?: string | null;
};
