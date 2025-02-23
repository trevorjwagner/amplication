import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EnterpriseList } from "./enterprise/EnterpriseList";
import { EnterpriseCreate } from "./enterprise/EnterpriseCreate";
import { EnterpriseEdit } from "./enterprise/EnterpriseEdit";
import { EnterpriseShow } from "./enterprise/EnterpriseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"crm"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Enterprise"
          list={EnterpriseList}
          edit={EnterpriseEdit}
          create={EnterpriseCreate}
          show={EnterpriseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
