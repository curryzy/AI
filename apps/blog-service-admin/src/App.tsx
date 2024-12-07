import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuthorList } from "./author/AuthorList";
import { AuthorCreate } from "./author/AuthorCreate";
import { AuthorEdit } from "./author/AuthorEdit";
import { AuthorShow } from "./author/AuthorShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { BlogList } from "./blog/BlogList";
import { BlogCreate } from "./blog/BlogCreate";
import { BlogEdit } from "./blog/BlogEdit";
import { BlogShow } from "./blog/BlogShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { CustomerLevelList } from "./customerLevel/CustomerLevelList";
import { CustomerLevelCreate } from "./customerLevel/CustomerLevelCreate";
import { CustomerLevelEdit } from "./customerLevel/CustomerLevelEdit";
import { CustomerLevelShow } from "./customerLevel/CustomerLevelShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { CustomerInfoList } from "./customerInfo/CustomerInfoList";
import { CustomerInfoCreate } from "./customerInfo/CustomerInfoCreate";
import { CustomerInfoEdit } from "./customerInfo/CustomerInfoEdit";
import { CustomerInfoShow } from "./customerInfo/CustomerInfoShow";
import { QuotationList } from "./quotation/QuotationList";
import { QuotationCreate } from "./quotation/QuotationCreate";
import { QuotationEdit } from "./quotation/QuotationEdit";
import { QuotationShow } from "./quotation/QuotationShow";
import { SalesProcessList } from "./salesProcess/SalesProcessList";
import { SalesProcessCreate } from "./salesProcess/SalesProcessCreate";
import { SalesProcessEdit } from "./salesProcess/SalesProcessEdit";
import { SalesProcessShow } from "./salesProcess/SalesProcessShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BlogService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Author"
          list={AuthorList}
          edit={AuthorEdit}
          create={AuthorCreate}
          show={AuthorShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Blog"
          list={BlogList}
          edit={BlogEdit}
          create={BlogCreate}
          show={BlogShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="CustomerLevel"
          list={CustomerLevelList}
          edit={CustomerLevelEdit}
          create={CustomerLevelCreate}
          show={CustomerLevelShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="CustomerInfo"
          list={CustomerInfoList}
          edit={CustomerInfoEdit}
          create={CustomerInfoCreate}
          show={CustomerInfoShow}
        />
        <Resource
          name="Quotation"
          list={QuotationList}
          edit={QuotationEdit}
          create={QuotationCreate}
          show={QuotationShow}
        />
        <Resource
          name="SalesProcess"
          list={SalesProcessList}
          edit={SalesProcessEdit}
          create={SalesProcessCreate}
          show={SalesProcessShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
