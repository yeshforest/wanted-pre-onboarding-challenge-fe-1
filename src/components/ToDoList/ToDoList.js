import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((it) => (
        <ToDoItem key={it.id} {...it} />
      ))}
    </div>
  );
};
ToDoList.defaultProps = {
  todoList: [],
};
export default ToDoList;
