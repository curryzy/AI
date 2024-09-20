import { SortOrder } from "../../util/SortOrder";

export type MarketActivityOrderByInput = {
  activityName?: SortOrder;
  createdAt?: SortOrder;
  evaluation?: SortOrder;
  id?: SortOrder;
  participants?: SortOrder;
  updatedAt?: SortOrder;
};
