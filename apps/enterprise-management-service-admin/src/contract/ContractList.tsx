import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALEOPPORTUNITY_TITLE_FIELD } from "../saleOpportunity/SaleOpportunityTitle";

export const ContractList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Contracts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contractDetails" source="contractDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="saleOpportunity"
          source="saleopportunity.id"
          reference="SaleOpportunity"
        >
          <TextField source={SALEOPPORTUNITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validityPeriod" source="validityPeriod" />{" "}
      </Datagrid>
    </List>
  );
};
