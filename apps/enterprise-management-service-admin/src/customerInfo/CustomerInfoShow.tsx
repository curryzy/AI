import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CUSTOMERLEVEL_TITLE_FIELD } from "../customerLevel/CustomerLevelTitle";

export const CustomerInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="communicationContent" source="communicationContent" />
        <TextField label="companyInfo" source="companyInfo" />
        <TextField label="contactInfo" source="contactInfo" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customerLevel"
          source="customerlevel.id"
          reference="CustomerLevel"
        >
          <TextField source={CUSTOMERLEVEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="followUpLogs" source="followUpLogs" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
