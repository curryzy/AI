import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  blogId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
