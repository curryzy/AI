import { SortOrder } from "../../util/SortOrder";

export type QuotationOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  quotationDetails?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
};
