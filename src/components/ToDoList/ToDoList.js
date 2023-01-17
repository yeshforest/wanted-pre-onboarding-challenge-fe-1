import ToDoItem from "../ToDoItem/ToDoItem";
import { ToDoListWrapper } from "./styled";

const ToDoList = ({ todoList }) => {
  return (
    <ToDoListWrapper>
      {todoList.map((it) => (
        <ToDoItem key={it.id} {...it} />
      ))}
    </ToDoListWrapper>
  );
};
ToDoList.defaultProps = {
  todoList: [],
};
export default ToDoList;
