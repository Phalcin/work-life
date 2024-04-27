import Add from "./Add";

const myName = "Emmanuel";
const multiply = (a, b) => a * b;
const specialClass = "simple-class";

function App() {
  return (
    <>
      <h1>{myName}</h1>
      <p>{2 + 2}</p>
      <p>My friends list: {["Alex", " John", " Jordan"]}</p>
    </>
  );
}

export default App;
