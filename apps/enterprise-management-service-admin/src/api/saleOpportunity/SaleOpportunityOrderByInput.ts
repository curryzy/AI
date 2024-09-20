import { SortOrder } from "../../util/SortOrder";

export type SaleOpportunityOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  leadId?: SortOrder;
  progress?: SortOrder;
  revenueForecast?: SortOrder;
  updatedAt?: SortOrder;
};
