import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contractDetails" multiline source="contractDetails" />
        <TextInput label="customer" source="customer" />
        <DateTimeInput label="validityPeriod" source="validityPeriod" />
      </SimpleForm>
    </Edit>
  );
};
