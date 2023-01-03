const ToDoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((it) => (
        <div key={it.id}>{it.title + "\n" + it.content}</div>
      ))}
    </div>
  );
};
ToDoList.defaultProps = {
  todoList: [],
};
export default ToDoList;
