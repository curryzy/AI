import { CustomerLevelWhereInput } from "./CustomerLevelWhereInput";
import { CustomerLevelOrderByInput } from "./CustomerLevelOrderByInput";

export type CustomerLevelFindManyArgs = {
  where?: CustomerLevelWhereInput;
  orderBy?: Array<CustomerLevelOrderByInput>;
  skip?: number;
  take?: number;
};
