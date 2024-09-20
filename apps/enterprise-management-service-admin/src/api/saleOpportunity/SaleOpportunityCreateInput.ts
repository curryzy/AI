import { ContractCreateNestedManyWithoutSaleOpportunitiesInput } from "./ContractCreateNestedManyWithoutSaleOpportunitiesInput";
import { LeadWhereUniqueInput } from "../lead/LeadWhereUniqueInput";

export type SaleOpportunityCreateInput = {
  contracts?: ContractCreateNestedManyWithoutSaleOpportunitiesInput;
  customer?: string | null;
  lead?: LeadWhereUniqueInput | null;
  progress?: string | null;
  revenueForecast?: number | null;
};
