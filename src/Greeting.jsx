import "./App.css";
const Greeting = (props) => {
  return (
    <div>
      <h1 className="text">Hello, {props.name}!</h1>
      <h1>I live in, {props.city}!</h1>
      {/* <h3>my favorite club is {props.club}:</h3>
      <h3>my hobby is {props.hobby}:</h3>
       */}
    </div>
  );
};
export default Greeting;
