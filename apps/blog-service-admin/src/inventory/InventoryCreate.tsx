import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="incomingDate" source="incomingDate" />
        <NumberInput step={1} label="inventoryCount" source="inventoryCount" />
        <DateTimeInput label="outgoingDate" source="outgoingDate" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="warehouseLocation" source="warehouseLocation" />
      </SimpleForm>
    </Create>
  );
};
