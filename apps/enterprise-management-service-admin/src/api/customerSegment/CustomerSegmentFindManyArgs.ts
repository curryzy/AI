import { CustomerSegmentWhereInput } from "./CustomerSegmentWhereInput";
import { CustomerSegmentOrderByInput } from "./CustomerSegmentOrderByInput";

export type CustomerSegmentFindManyArgs = {
  where?: CustomerSegmentWhereInput;
  orderBy?: Array<CustomerSegmentOrderByInput>;
  skip?: number;
  take?: number;
};
