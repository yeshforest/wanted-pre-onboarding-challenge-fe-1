import { useContext } from "react";
import { ToDoStateContext } from "../../App";
import { HomeBody, Title } from "./styled";
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
      <Title>ToDo List</Title>
      <ToDoList todoList={todoList} />
    </HomeBody>
  );
};

export default Home;
