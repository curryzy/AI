export type Quotation = {
  createdAt: Date;
  customer: string | null;
  id: string;
  quotationDetails: string | null;
  updatedAt: Date;
  validUntil: Date | null;
};
