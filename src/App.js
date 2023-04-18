import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Child from "./Child";
import Student from "./Student";

function App() {
  // const [isTrue, setIsTrue] = useState(true);
  // const para =
  //   "React Props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML attributes:";

  // const alertIt = (data) => {
  //   alert(data);
  // };
  const [todos, setTodos] = useState([
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
  ]);
  const [currObj, setCurrObj] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [update, setUpdate] = useState(false);
  const handleClick = () => {
    if (!currObj.title) {
      if (inputValue !== "")
        setTodos((prev) => [
          ...prev,
          { id: Math.floor(Math.random() * 1000) + 1, title: inputValue },
        ]);
      setInputValue("");
    } else {
      const updatedList = [...todos];
      const index = todos.findIndex((item) => item.id === currObj.id);
      updatedList[index].title = inputValue;
      setTodos(updatedList);
      setInputValue("");
      setUpdate(false);
    }

    if (inputValue === "") alert("Please enter something!!");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const obj = todos.find((item) => item.id === id);
    setCurrObj(obj);
    setInputValue(obj.title);
    setUpdate(true);
  };

  return (
    <div className="App">
      {/* <h1>{isTrue ? "Hello World!!" : "Namaste India!!"}</h1>
      <button onClick={() => setIsTrue(!isTrue)}>Click Me</button>

      <Child desc={para} alertIt={alertIt} />
      <Student name={"Rizwan"} age={23} address={"Near bhandpura , akola."} />
      <Student name={"Rameez"} age={23} address={"Near Mominpura , akola."} />
      <Student name={"Faizan"} age={23} address={"Near Tarfail , akola."} /> */}
      <h1>Todo List</h1>
      <div className=" input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleClick}>{update ? "Update" : "Add"}</button>
      </div>
      <div>
        <ul>
          {todos &&
            todos.map((item) => (
              <li key={item.id}>
                {item.title}
                <div>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(item.id)}> Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
