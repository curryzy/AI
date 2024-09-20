import { ContractUpdateManyWithoutSaleOpportunitiesInput } from "./ContractUpdateManyWithoutSaleOpportunitiesInput";
import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type SaleOpportunityUpdateInput = {
  contracts?: ContractUpdateManyWithoutSaleOpportunitiesInput;
  customer?: string | null;
  lead?: LeadWhereUniqueInput | null;
  progress?: string | null;
  revenueForecast?: number | null;
};
