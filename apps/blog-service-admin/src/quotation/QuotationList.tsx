import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QuotationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Quotations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="ID" source="id" />
        <TextField label="quotationDetails" source="quotationDetails" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validUntil" source="validUntil" />{" "}
      </Datagrid>
    </List>
  );
};
