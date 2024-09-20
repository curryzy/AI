import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { QuotationList } from "./quotation/QuotationList";
import { QuotationCreate } from "./quotation/QuotationCreate";
import { QuotationEdit } from "./quotation/QuotationEdit";
import { QuotationShow } from "./quotation/QuotationShow";
import { SaleOpportunityList } from "./saleOpportunity/SaleOpportunityList";
import { SaleOpportunityCreate } from "./saleOpportunity/SaleOpportunityCreate";
import { SaleOpportunityEdit } from "./saleOpportunity/SaleOpportunityEdit";
import { SaleOpportunityShow } from "./saleOpportunity/SaleOpportunityShow";
import { CustomerSegmentList } from "./customerSegment/CustomerSegmentList";
import { CustomerSegmentCreate } from "./customerSegment/CustomerSegmentCreate";
import { CustomerSegmentEdit } from "./customerSegment/CustomerSegmentEdit";
import { CustomerSegmentShow } from "./customerSegment/CustomerSegmentShow";
import { MarketActivityList } from "./marketActivity/MarketActivityList";
import { MarketActivityCreate } from "./marketActivity/MarketActivityCreate";
import { MarketActivityEdit } from "./marketActivity/MarketActivityEdit";
import { MarketActivityShow } from "./marketActivity/MarketActivityShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { EmailCampaignList } from "./emailCampaign/EmailCampaignList";
import { EmailCampaignCreate } from "./emailCampaign/EmailCampaignCreate";
import { EmailCampaignEdit } from "./emailCampaign/EmailCampaignEdit";
import { EmailCampaignShow } from "./emailCampaign/EmailCampaignShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { CustomerLevelList } from "./customerLevel/CustomerLevelList";
import { CustomerLevelCreate } from "./customerLevel/CustomerLevelCreate";
import { CustomerLevelEdit } from "./customerLevel/CustomerLevelEdit";
import { CustomerLevelShow } from "./customerLevel/CustomerLevelShow";
import { CustomerInfoList } from "./customerInfo/CustomerInfoList";
import { CustomerInfoCreate } from "./customerInfo/CustomerInfoCreate";
import { CustomerInfoEdit } from "./customerInfo/CustomerInfoEdit";
import { CustomerInfoShow } from "./customerInfo/CustomerInfoShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"EnterpriseManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Quotation"
          list={QuotationList}
          edit={QuotationEdit}
          create={QuotationCreate}
          show={QuotationShow}
        />
        <Resource
          name="SaleOpportunity"
          list={SaleOpportunityList}
          edit={SaleOpportunityEdit}
          create={SaleOpportunityCreate}
          show={SaleOpportunityShow}
        />
        <Resource
          name="CustomerSegment"
          list={CustomerSegmentList}
          edit={CustomerSegmentEdit}
          create={CustomerSegmentCreate}
          show={CustomerSegmentShow}
        />
        <Resource
          name="MarketActivity"
          list={MarketActivityList}
          edit={MarketActivityEdit}
          create={MarketActivityCreate}
          show={MarketActivityShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="EmailCampaign"
          list={EmailCampaignList}
          edit={EmailCampaignEdit}
          create={EmailCampaignCreate}
          show={EmailCampaignShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="CustomerLevel"
          list={CustomerLevelList}
          edit={CustomerLevelEdit}
          create={CustomerLevelCreate}
          show={CustomerLevelShow}
        />
        <Resource
          name="CustomerInfo"
          list={CustomerInfoList}
          edit={CustomerInfoEdit}
          create={CustomerInfoCreate}
          show={CustomerInfoShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
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
