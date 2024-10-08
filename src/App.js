import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { Footer } from "./components/Footer";
import React, { useState, useEffect } from "react";
import { ATodo } from "./components/ATodo";
import { About } from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My-Todos-List" />

        <Routes>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <ATodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>

          <Route path="/about">
            <About />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
