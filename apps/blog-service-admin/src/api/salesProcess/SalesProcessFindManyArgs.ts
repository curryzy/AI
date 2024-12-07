import { SalesProcessWhereInput } from "./SalesProcessWhereInput";
import { SalesProcessOrderByInput } from "./SalesProcessOrderByInput";

export type SalesProcessFindManyArgs = {
  where?: SalesProcessWhereInput;
  orderBy?: Array<SalesProcessOrderByInput>;
  skip?: number;
  take?: number;
};
