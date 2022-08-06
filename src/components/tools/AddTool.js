import classes from "./AddTool.module.css";

const handleAddToolClick = () => {
  alert("Demo Button");
};

const AddTool = (props) => (
  <button href="#" onClick={handleAddToolClick} className={`${classes.button}`}>
    Add Tool
  </button>
);

export default AddTool;
