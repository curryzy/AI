import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  confirmation?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  orderStatus?: SortOrder;
  orderTracking?: SortOrder;
  payment?: SortOrder;
  shippingInfo?: SortOrder;
  updatedAt?: SortOrder;
};
