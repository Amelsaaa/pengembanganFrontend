import React from "react";
import "./App.css";
import "./component/card";
import Card from "./component/card";

function App() {
  return (
    <div>
      <Card prod_name="TV LED" prod_desc="..." />
      <Card prod_name="Setrika" prod_desc="..." />
      <Card prod_name="TV LED" prod_desc="..." />
    </div>
  );
}

export default App;
