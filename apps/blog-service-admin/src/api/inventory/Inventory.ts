import { Product } from "../product/Product";

export type Inventory = {
  createdAt: Date;
  id: string;
  incomingDate: Date | null;
  inventoryCount: number | null;
  outgoingDate: Date | null;
  product?: Product | null;
  updatedAt: Date;
  warehouseLocation: string | null;
};
