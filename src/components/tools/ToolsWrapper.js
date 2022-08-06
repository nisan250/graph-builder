import AddTool from "./AddTool";
import SearchTool from "./SearchTool";
import ToolsList from "./ToolsList";
import classes from "./ToolsWrapper.module.css";

const ToolsWrapper = (props) => {
  const handleAddTool = (tool) => {
    props.addTool(tool);
  };

  return (
    <div className={`${classes.wrapper} ${props.isActive ? classes.open : ""}`}>
      <AddTool />
      <SearchTool />
      <ToolsList addTool={handleAddTool} />
    </div>
  );
};

export default ToolsWrapper;
