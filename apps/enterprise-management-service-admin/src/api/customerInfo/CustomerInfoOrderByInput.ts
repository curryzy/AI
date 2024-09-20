import { SortOrder } from "../../util/SortOrder";

export type CustomerInfoOrderByInput = {
  address?: SortOrder;
  communicationContent?: SortOrder;
  companyInfo?: SortOrder;
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  customerLevelId?: SortOrder;
  followUpLogs?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
