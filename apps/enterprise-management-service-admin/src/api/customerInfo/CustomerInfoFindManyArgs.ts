import { CustomerInfoWhereInput } from "./CustomerInfoWhereInput";
import { CustomerInfoOrderByInput } from "./CustomerInfoOrderByInput";

export type CustomerInfoFindManyArgs = {
  where?: CustomerInfoWhereInput;
  orderBy?: Array<CustomerInfoOrderByInput>;
  skip?: number;
  take?: number;
};
