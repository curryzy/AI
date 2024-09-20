import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  contractDetails?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  saleOpportunityId?: SortOrder;
  updatedAt?: SortOrder;
  validityPeriod?: SortOrder;
};
