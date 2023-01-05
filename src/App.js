import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useReducer } from "react";

import Login from "./pages/Login/Login";
import Home, { NotLoginedHome } from "./pages/Home/Home";
import OnEdit from "./pages/OnUpdate/OnUpdate";
import SignUp from "./pages/SignUp/SignUp";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
};

export const ToDoStateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const isLogined = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://192.168.0.17:8080/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.getItem("token"),
      },
    })
      .then((response) => response.json()) //server에서 보내준 response를 object 형태로 변환
      .then((result) => {
        dispatch({
          type: "INIT",
          data: result.data,
        });
      });
  };
  return (
    <ToDoStateContext.Provider value={data}>
      <BrowserRouter>
        <div className="App">
          {isLogined ? (
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/update" element={<OnEdit />}></Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<NotLoginedHome />}></Route>
              <Route path="/auth/login" element={<Login />}></Route>
              <Route path="/auth/signup" element={<SignUp />}></Route>
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </ToDoStateContext.Provider>
  );
}

export default App;
