import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="confirmation" source="confirmation" />
        <TextInput label="customer" source="customer" />
        <TextInput label="orderStatus" source="orderStatus" />
        <TextInput label="orderTracking" source="orderTracking" />
        <BooleanInput label="payment" source="payment" />
        <TextInput label="shippingInfo" source="shippingInfo" />
      </SimpleForm>
    </Create>
  );
};
