import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMERLEVEL_TITLE_FIELD } from "./CustomerLevelTitle";

export const CustomerLevelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="level" source="level" />
        <TextField label="potentialValue" source="potentialValue" />
        <TextField label="transactionHistory" source="transactionHistory" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CustomerInfo"
          target="customerLevelId"
          label="CustomerInfos"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="address" source="address" />
            <TextField
              label="communicationContent"
              source="communicationContent"
            />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
