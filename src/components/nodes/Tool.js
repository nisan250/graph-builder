import classes from "./Tool.module.css";

const Tool = (props) => (
  <div data-id={props.id} data-type={props.type} className={`${classes.tool}`}>
    {props.title}
    <br /> ID:{props.nodeId} Parent:{props.parentNodeId}
  </div>
);

export default Tool;
