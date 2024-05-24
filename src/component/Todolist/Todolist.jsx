import TodoItem from "./TodoItem/TodoItem";
import "./Todoliststyles.css";
const Todolist = (props) => {
  const todos = props.todos;
  return (
    <div>
      <div>
        {todos.length === 0 ? (
          <div className="plus-circle-styles">
            <box-icon
              name="plus-circle"
              animation="spin"
              rotate="90"
            ></box-icon>
          </div>
        ) : (
          todos.map((e) => (
            <TodoItem
              id={e.id}
              key={e.id}
              task={e.task}
              isFinished={e.isFinished}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todolist;
