import "../UI/Card.css";

let k = 1000;
const getKey = () => {
  k++;
  return k;
};
const AllUsers = (props) => {
  return (
    <ul>
      {props.data.map((user) => {
        return (
          <li className="card" key={getKey()}>
            Name - {user.name} , Age - {user.age} , College - {user.college}
          </li>
        );
      })}
    </ul>
  );
};

export default AllUsers;
