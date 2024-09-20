import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LEAD_TITLE_FIELD } from "./LeadTitle";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="conversionRate" source="conversionRate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="ID" source="id" />
        <TextField label="leadSource" source="leadSource" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SaleOpportunity"
          target="leadId"
          label="SaleOpportunities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="customer" source="customer" />
            <TextField label="ID" source="id" />
            <ReferenceField label="lead" source="lead.id" reference="Lead">
              <TextField source={LEAD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="progress" source="progress" />
            <TextField label="revenueForecast" source="revenueForecast" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
