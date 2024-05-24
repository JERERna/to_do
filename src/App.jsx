import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Contents from "./component/contents/contents";
import Todolist from "./component/Todolist/Todolist";
import { HenderContext } from "./component/context";
let initialId = 3;

const uniqueId = () => {
  initialId = initialId + 1;
  return initialId;
};
const TODOS = [
  {
    id: 1,
    task: "HTML,CSS,JS",
    isFinished: true,
  },
  {
    id: 2,
    task: "REACT",
    isFinished: false,
  },
  {
    id: 3,
    task: "UX/UI",
    isFinished: false,
  },
];

const reducer = (todos, action) => {
  switch (action.type) {
    case "dle":
      return todos.filter((e) => e.id !== action.id);
    case "additem":
      return [
        ...todos,
        {
          ...action.newitem,
          isFinished: false,
          id: action.id,
        },
      ];
    case "edit":
      const newtodo = [...todos];
      const dex = todos.findIndex((e) => e.id === action.id);
      newtodo[dex] = { ...action.etask };
      return newtodo;
    default:
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, {} , () => {
    const localtodo = localStorage.getItem("TODOTASK")
    if(localtodo===null) {
      return TODOS 
    }
    return JSON.parse(localtodo)
  });
  useEffect(() => {
    localStorage.setItem("TODOTASK", JSON.stringify(todos));
  }, [todos]);

  const addNewItem = (newitem) => {
    dispatch({
      type: "additem",
      newitem: newitem,
      id: uniqueId(),
    });
  };
  const deleteHender = (id) => {
    dispatch({
      type: "dle",
      id: id,
    });
  };
  const editHander = (id, etask) => {
    dispatch({
      type: "edit",
      etask: etask,
      id: id,
    });
  };

  return (
    <HenderContext.Provider
      value={{
        addNewItem: addNewItem,
        deleteHender: deleteHender,
        editHander: editHander,
      }}
    >
      <div className="App">
        <Header />
        <br />
        <Contents onAddItem={addNewItem} />
        <Todolist todos={todos} />
      </div>
    </HenderContext.Provider>
  );
}

export default App;
