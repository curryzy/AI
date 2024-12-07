export type Order = {
  confirmation: boolean | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  orderStatus: string | null;
  orderTracking: string | null;
  payment: boolean | null;
  shippingInfo: string | null;
  updatedAt: Date;
};
