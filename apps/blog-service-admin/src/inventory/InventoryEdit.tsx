import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="incomingDate" source="incomingDate" />
        <NumberInput step={1} label="inventoryCount" source="inventoryCount" />
        <DateTimeInput label="outgoingDate" source="outgoingDate" />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="warehouseLocation" source="warehouseLocation" />
      </SimpleForm>
    </Edit>
  );
};
