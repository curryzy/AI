import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

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
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validityPeriod" source="validityPeriod" />{" "}
      </Datagrid>
    </List>
  );
};
