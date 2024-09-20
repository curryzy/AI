import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryStatus?: SortOrder;
  price?: SortOrder;
  productName?: SortOrder;
  specifications?: SortOrder;
  updatedAt?: SortOrder;
};
