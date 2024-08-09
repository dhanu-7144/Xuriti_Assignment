import React, { useState } from "react";
import "./style.css";
import DataTable from "./table";

export default function Userslist() {
  
  return (
    <div className="App">
      <h1>WELCOME TO XURITI</h1>
      <div className="container userlist" id="container">
        <DataTable/>
      </div>
    </div>
  );
}