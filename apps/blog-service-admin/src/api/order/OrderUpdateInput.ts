export type OrderUpdateInput = {
  confirmation?: boolean | null;
  customer?: string | null;
  orderStatus?: string | null;
  orderTracking?: string | null;
  payment?: boolean | null;
  shippingInfo?: string | null;
};
