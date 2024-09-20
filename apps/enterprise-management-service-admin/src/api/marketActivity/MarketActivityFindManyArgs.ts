import { MarketActivityWhereInput } from "./MarketActivityWhereInput";
import { MarketActivityOrderByInput } from "./MarketActivityOrderByInput";

export type MarketActivityFindManyArgs = {
  where?: MarketActivityWhereInput;
  orderBy?: Array<MarketActivityOrderByInput>;
  skip?: number;
  take?: number;
};
