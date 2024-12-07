import { Inventory } from "../inventory/Inventory";

export type Product = {
  createdAt: Date;
  id: string;
  inventories?: Array<Inventory>;
  inventoryStatus: string | null;
  price: number | null;
  productName: string | null;
  specifications: string | null;
  updatedAt: Date;
};
