import { SaleOpportunityWhereUniqueInput } from "../saleOpportunity/SaleOpportunityWhereUniqueInput";

export type ContractUpdateInput = {
  contractDetails?: string | null;
  customer?: string | null;
  saleOpportunity?: SaleOpportunityWhereUniqueInput | null;
  validityPeriod?: Date | null;
};
