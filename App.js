import "./App.css";
import { useState } from "react";
import React from "react";
import UserForm from "./Components/UserForm";
import AllUsers from "./Components/AllUsers";

function App() {
  let [users, setUser] = useState([
    { name: "Vimal", age: 25 , college : "IIT Delhi" },
    { name: "Aarti", age: 26 , college : "IIM Indore" },
    { name: "Pintu", age: 23  , college : "IIT Madras"},
    { name: "Anjali", age: 24 , college : "IIT Indore"},
  ]);

  const AddNewUser = (newUser) => {
    setUser((oldData) => {
      return [newUser, ...oldData];
    });
  };

  return (
    <div className="App">
      <UserForm newData={AddNewUser}></UserForm>
      <AllUsers data={users}></AllUsers>
    </div>
  );
}

export default App;
