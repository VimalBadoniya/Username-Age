import { useState } from "react";
import Error from "../UI/Error";
const UserForm = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [isError, setError] = useState();
  const nameHandler = (e) => {
    setName(e.target.value);
    if(e.target.value.trim().length === 0) {setError({title: "Invalid Name" , message : "Please enter valid name"})}
  };

  const ageHandler = (evn) => {
    setAge(evn.target.value);
    if(evn.target.value <= 0) {setError({title: "Invalid Age" , message : "Please enter valid age (Negative value or zero is not allowed)"})}
  };

  
  

  let newEnteredUser = { name: enteredName, age: enteredAge };

  const submitHandler = (event) => {
    event.preventDefault();
    if(isError){return;}
    if (!isError) {
      props.newData(newEnteredUser);
      setAge("");
      setName("");
      setError(null)
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">User Name</label>
          <input
            id="name"
            type="text"
            onChange={nameHandler}
            value={enteredName}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            min={1}
            value={enteredAge}
            onChange={ageHandler}
          ></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
      {isError && <Error title={isError.title} message ={isError.message}></Error>}
    </div>
  );
};

export default UserForm;
