import React from "react";
import { Provider } from "react-redux";
import { RoutesConfig } from "routes/RoutesConfig";
import storeObject, { persReducer } from "store";
import setAuthToken from "utils/setAuthToken";
import "./App.scss";
import "./styles/global.scss";
import { PersistGate } from "redux-persist/integration/react";

setAuthToken(localStorage.token);

function App() {
  return (
    <Provider store={storeObject.store}>
      <RoutesConfig />
      {/* <PersistGate persistor={storeObject.persistor}>
      </PersistGate> */}
    </Provider>
  );
}

export default App;
