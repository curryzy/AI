import { SortOrder } from "../../util/SortOrder";

export type SalesProcessOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  followUp?: SortOrder;
  id?: SortOrder;
  salesStage?: SortOrder;
  updatedAt?: SortOrder;
};
