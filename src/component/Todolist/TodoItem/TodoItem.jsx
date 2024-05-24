import { useContext, useState } from "react";
import "./TodoItemstyles.css";
import { HenderContext } from "../../context";

const TodoItem = (props) => {
  const task = props.task;
  const id = props.id;
  const isFinished = props.isFinished;
  const [curTask, setCurTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const ctx = useContext(HenderContext);

  const [isFini, setIsFini] = useState(false);
  const clickdone = () => {
    const EditDone = {
      task: curTask,
      id: id,
      isFinished: isFinished,
    };
    ctx.editHander(id, EditDone);
    setIsEdit(false);
  };
  if (isFini) {
    return (
      <div className="form-control">
        <div className="tn-container">
          <del>{task}</del>
        </div>
        <div className="bt-container" onClick={() => setIsFini(false)}>
          <box-icon name="arrow-back" rotate="180" color="#A9A9A9"></box-icon>
        </div>
      </div>
    );
  }

  if (isEdit) {
    return (
      <div className="form-control">
        <input
          key={id}
          value={curTask}
          onChange={(e) => setCurTask(e.target.value)}
          className="tn-container2"
        />
        <div className="bt-container" onClick={clickdone}>
          <box-icon name="arrow-back" rotate="180" color="#A9A9A9"></box-icon>
        </div>
      </div>
    );
  }

  return (
    <div className="form-control">
      <div className="tn-container">{task}</div>
      <div
        onClick={() => {
          setIsEdit(true);
          setCurTask(task);
        }}
        className="ed-container"
      >
        <box-icon name="edit-alt" color="#ADD1E6"></box-icon>
      </div>
      <div onClick={() => ctx.deleteHender(id)} className="de-container">
        <box-icon name="x" color="red"></box-icon>
      </div>
      <div
        className="cr-container"
        onClick={() => {
          setIsFini(true);
        }}
      >
        <box-icon name="check" color="green"></box-icon>
      </div>
    </div>
  );
};

export default TodoItem;
