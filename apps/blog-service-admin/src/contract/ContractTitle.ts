import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "customer";

export const ContractTitle = (record: TContract): string => {
  return record.customer?.toString() || String(record.id);
};
