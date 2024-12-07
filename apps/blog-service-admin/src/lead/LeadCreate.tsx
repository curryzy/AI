import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="customer" source="customer" />
        <TextInput label="leadSource" source="leadSource" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
