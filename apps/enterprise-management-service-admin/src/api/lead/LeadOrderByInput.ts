import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  conversionRate?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  leadSource?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
