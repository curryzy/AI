import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="confirmation" source="confirmation" />
        <TextInput label="customer" source="customer" />
        <TextInput label="orderStatus" source="orderStatus" />
        <TextInput label="orderTracking" source="orderTracking" />
        <BooleanInput label="payment" source="payment" />
        <TextInput label="shippingInfo" source="shippingInfo" />
      </SimpleForm>
    </Edit>
  );
};
