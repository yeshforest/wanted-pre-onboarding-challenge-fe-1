import { useContext } from "react";

import { ToDoStateContext } from "../../App";
import { HomeBody } from "./styled";
import ToDoList from "../../components/ToDoList/ToDoList";
const Home = () => {
  const todoList = useContext(ToDoStateContext);
  return (
    <HomeBody>
      <h1>ToDo List</h1>
      <p>이곳은 홈 입니다.</p>
      <ToDoList todoList={todoList} />
    </HomeBody>
  );
};

export default Home;
