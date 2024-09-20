import { SaleOpportunityWhereUniqueInput } from "../saleOpportunity/SaleOpportunityWhereUniqueInput";

export type ContractCreateInput = {
  contractDetails?: string | null;
  customer?: string | null;
  saleOpportunity?: SaleOpportunityWhereUniqueInput | null;
  validityPeriod?: Date | null;
};
