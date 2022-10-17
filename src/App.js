import "./App.css";
import React from 'react';
import { RouterProvider  } from "react-router-dom";
import ContactProvider from "./component/context/Contact.provider";
import router from "./routes/routes";
import { Provider } from "react-redux";
import  {store}  from "./component/redux/store";
import {persistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"
 let persistor=persistStore(store)
function App() {

  return (
    //<ContactProvider>
    <Provider store={store} >
      <persistGate persistor={persistor}>
         <RouterProvider router={router}/>
      </persistGate>
    </Provider >
    //</ContactProvider>
 
  );
}

export default App;
