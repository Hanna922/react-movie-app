import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []); // 빈 array를 써주면 코드가 한 번만 실행됨
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    //   console.log("SEARTCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알림
  // => counter가 변화할 때는 실행되지 않을 것이며, keyword가 변할때만 실행될 것
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;