import { useState } from "react";
import "./contentstyles.css";
const Contents = (props) => {
  const [newItem, setNewItem] = useState("");
  ;
  const Submit = () => {
    const nNewItem = {
      task: newItem
    }

    props.onAddItem(nNewItem)

    setNewItem("")
  }

  return (
    <div>
      <div className="form">
        <input
          placeholder="Add new item"
          autoFocus
          value={newItem}
          onChange={(e)=> setNewItem(e.target.value)}
        />
        <button className="button-plus" onClick={Submit} ><box-icon name='plus' color='white' ></box-icon></button>
      </div>
    </div>
  );
};

export default Contents;
