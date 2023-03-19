import "./Card.css";

const Error = (props) => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="error">
        <header>
          <h2>{props.title}</h2>
        </header>

        <div>
          <p>{props.message}</p>
        </div>

        <footer>
          <button>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default Error;
