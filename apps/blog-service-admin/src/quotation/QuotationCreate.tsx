import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const QuotationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <TextInput
          label="quotationDetails"
          multiline
          source="quotationDetails"
        />
        <DateTimeInput label="validUntil" source="validUntil" />
      </SimpleForm>
    </Create>
  );
};
