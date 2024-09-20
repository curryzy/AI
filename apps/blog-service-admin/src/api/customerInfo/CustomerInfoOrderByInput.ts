import { SortOrder } from "../../util/SortOrder";

export type CustomerInfoOrderByInput = {
  address?: SortOrder;
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  customerLevelId?: SortOrder;
  id?: SortOrder;
  interactionHistory?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
