import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";

import Login from "./pages/Login/Login";
import Home, { NotLoginedHome } from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
};

export const ToDoStateContext = React.createContext();

const dummyData = [
  {
    title: "happy happy camilla",
    content: "fianlly happy1",
    id: "nsa-iDm2FHSG1D02lnxOM",
    createdAt: "2023-01-03T04:38:55.376Z",
    updatedAt: "2023-01-03T04:38:55.376Z",
  },
  {
    title: "happy happy subin",
    content: "fianlly happy2",
    id: "nsa-iDm2FHSG1D02lnweM",
    createdAt: "2023-01-03T05:38:55.376Z",
    updatedAt: "2023-01-03T04:38:55.376Z",
  },
  {
    title: "happy happy minju",
    content: "fianlly happy3",
    id: "nsa-iDm2Fqweqwe1D02lnxOM",
    createdAt: "2023-01-03T06:38:55.376Z",
    updatedAt: "2023-01-03T04:38:55.376Z",
  },
  {
    title: "happy happy sang",
    content: "fianlly happy4",
    id: "nsa-iDm2FfffqD02lnxOM",
    createdAt: "2023-01-04T04:38:55.376Z",
    updatedAt: "2023-01-03T04:38:55.376Z",
  },
  {
    title: "happy happy stella",
    content: "fianlly happy5",
    id: "nsa-iDmqweqweG1D02lnxOM",
    createdAt: "2023-01-05T04:38:55.376Z",
    updatedAt: "2023-01-03T04:38:55.376Z",
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const isLogined = localStorage.getItem("token");
  return (
    <ToDoStateContext.Provider value={data}>
      <BrowserRouter>
        <div className="App">
          {isLogined ? (
            <Routes>
              <Route path="/" element={<Home />}></Route>
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
