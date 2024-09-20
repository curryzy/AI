import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="customer" source="customer" />
        <TextInput label="leadSource" source="leadSource" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
