import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ApplicationData from "./pages/ApplicationData/ApplicationData";
import BankAccount from "./pages/BankAccount/BankAccount";
import IntroWindow from "./pages/IntroWindow/IntroWindow";
import OtherInfo from "./pages/OtherInfo/OtherInfo";

import PersonalData from "./pages/PersonalData/PersonalData";
import Summary from "./pages/Summary/Summary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<IntroWindow />} exact />
          <Route path="/personal_data" element={<PersonalData />} />
          <Route path="/application_data" element={<ApplicationData />} />
          <Route path="/bank_account" element={<BankAccount />} />
          <Route path="/other_info" element={<OtherInfo />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
