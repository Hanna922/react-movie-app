import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  const deleteBtn = (index) => {
    setToDos((currentToDos) =>
      currentToDos.filter((_, currentIndex) => index !== currentIndex)
    );
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteBtn(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// onClick={deleteBtn}이 아닌 onClick={() => deleteBtn(index)} 라고 쓰는 이유는 ?
// => index 값을 넘기기 위한 것
