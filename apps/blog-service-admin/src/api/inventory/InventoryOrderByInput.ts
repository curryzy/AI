import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  incomingDate?: SortOrder;
  inventoryCount?: SortOrder;
  outgoingDate?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
  warehouseLocation?: SortOrder;
};
