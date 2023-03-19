import "./Card.css";

const Error = (props) => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="error">
        <header>
          <h2>{props.ErrorObj.title}</h2>
        </header>

        <div>
          <p>{props.ErrorObj.message}</p>
        </div>

        <footer>
          <button onClick={props.ButtonClick} className="error-button">Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default Error;
