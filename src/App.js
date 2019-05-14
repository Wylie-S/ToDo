import React from "react";

import "./App.css";

function App() {
  /*consider the things i will need as state goes and other app things
i know i will need an input in order to add text
i will need a button to submit the text
i need a way to display the items in a list
there will be an array of items*/

  //vaule is the text setting it to an empty string plural task
  const [tasks, setTasks] = React.useState([]);
  //the array of tasks
  const [value, setValue] = React.useState("");

  /*things below this line will be the UI what is rendered above this 
line is the functionality of things */
  function addTask() {
    // basically a spread of all the task then adding the new one to the array
    setTasks([...tasks, value]);
    //wnat the input box to auto empty after submitting the task
    setValue("");
  }

  return (
    <div>
      <ol>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ol>
      <input value={value} onInput={e => setValue(e.target.value)} />
      <button onClick={addTask}>Submit</button>
    </div>
  );
}

export default App;
