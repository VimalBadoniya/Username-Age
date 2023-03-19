import '../UI/Card.css'

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
            {user.name} is {user.age} years old
          </li>
        );
      })}
    </ul>
  );
};

export default AllUsers;
