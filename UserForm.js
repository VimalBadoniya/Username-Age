import React, { useRef, useState } from "react";
import Error from "../UI/Error";

const UserForm = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();
  const enteredCollegeName = useRef();
  const [isError, setError] = useState(undefined);

  const submitHandler = (event) => {
    event.preventDefault();
    let data = {
      name: enteredName.current.value,
      age: enteredAge.current.value,
      college: enteredCollegeName.current.value,
    };

    if (data.name.trim().length === 0) {
      setError({ title: "Invalid Name", message: "Please Enter Valid Name" });
      return;
    }

    if (data.age <= 0) {
      setError({
        title: "Age Name",
        message: "Please Enter Valid Age (Age>0)",
      });
      return;
    }

    if (data.college.trim().length === 0) {
      setError({
        title: "Invalid College Name",
        message: "Please Enter Valid College Name",
      });
      return;
    }

    props.newData(data);
    enteredName.current.value = "";
    enteredAge.current.value = "";
    enteredCollegeName.current.value = "";
    setError(undefined);
  };

  const onButtonClick = ()=>{
    setError(undefined)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">User Name</label>
          <input id="name" type="text" ref={enteredName}></input>
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" min={1} ref={enteredAge}></input>
        </div>
        <div>
          <label htmlFor="college">College Name</label>
          <input id="college" type="text" ref={enteredCollegeName}></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
      {isError && <Error ErrorObj = {isError} ButtonClick = {onButtonClick}></Error>}
    </div>
  );
};

export default UserForm;

