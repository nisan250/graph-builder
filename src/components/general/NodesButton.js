import { useState } from "react";
import classes from "./NodesButton.module.css";

const NodesButton = (props) => {
  const [open, setOpen] = useState(false);

  const toggleToolTip = () => {
    setOpen(!open);
    if (!open) {
      props.handleAddTool(open);
    }
  };

  const addToolHandler = () => {
    setOpen(false);
    props.handleAddTool(open);
  };

  const addCrossRoadHandler = () => {
    setOpen(false);
    props.handleAddCrossRoad();
  };

  return (
    <div className={`${classes.wrapper}`}>
      <button className={`${classes.button}`} onClick={toggleToolTip}>
        +
      </button>
      <div className={`${classes.tooltip} ${open ? classes.open : ""}`}>
        <div className={`${classes["add-wrapper"]}`}>
          <button onClick={addToolHandler}>#</button>
          <span>Add Tool</span>
        </div>
        <div className={`${classes["add-wrapper"]}`}>
          <button onClick={addCrossRoadHandler}>#</button>
          <span>Add CrossRoad</span>
        </div>
      </div>
    </div>
  );
};

export default NodesButton;
