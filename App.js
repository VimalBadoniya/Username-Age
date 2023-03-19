import "./App.css";
import { ReactDOM, useState } from "react";
import React from "react";
import UserForm from "./Components/UserForm";
import AllUsers from "./Components/AllUsers";

function App() {
  let [users, setUser] = useState([
    { name: "Vimal", age: 25 },
    { name: "Aarti", age: 26 },
    { name: "Pintu", age: 52 },
    { name: "Anjali", age: 23 },
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
