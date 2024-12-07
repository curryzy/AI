import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const QuotationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <TextInput
          label="quotationDetails"
          multiline
          source="quotationDetails"
        />
        <DateTimeInput label="validUntil" source="validUntil" />
      </SimpleForm>
    </Edit>
  );
};
