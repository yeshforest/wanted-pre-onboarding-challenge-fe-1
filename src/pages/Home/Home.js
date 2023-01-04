import { useContext } from "react";
import { useEffect } from "react";
import { ToDoStateContext } from "../../App";
import { HomeBody } from "./styled";
import ToDoList from "../../components/ToDoList/ToDoList";
//Home에서 토큰 삭제되었을 때 라우팅용 함수
export const NotLoginedHome = () => {
  if (!window.localStorage.getItem("token")) {
    window.location = "/auth/login";
  }
  return <>토큰 이상으로 로그인 화면으로 이동합니다.</>;
};
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
