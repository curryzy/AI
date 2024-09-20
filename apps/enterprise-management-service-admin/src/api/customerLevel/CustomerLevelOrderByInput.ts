import { SortOrder } from "../../util/SortOrder";

export type CustomerLevelOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  potentialValue?: SortOrder;
  transactionHistory?: SortOrder;
  updatedAt?: SortOrder;
};
