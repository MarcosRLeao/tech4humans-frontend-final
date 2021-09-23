import "./App.css";
import React from "react";

import { Tech4Climate } from "./components/MainComponent";

import AsideComponent from "./components/aside/asideComponent";
import ContentComponent from "./components/content/contentComponent";
import FooterComponent from "./components/footer/footerComponent";

function App() {
  return (
    <Tech4Climate>
   
      <AsideComponent />
      <ContentComponent />
      <FooterComponent/>
      
    </Tech4Climate>
  );
}

export default App;
