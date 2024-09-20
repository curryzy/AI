import { SaleOpportunityWhereInput } from "./SaleOpportunityWhereInput";
import { SaleOpportunityOrderByInput } from "./SaleOpportunityOrderByInput";

export type SaleOpportunityFindManyArgs = {
  where?: SaleOpportunityWhereInput;
  orderBy?: Array<SaleOpportunityOrderByInput>;
  skip?: number;
  take?: number;
};
