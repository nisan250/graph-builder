import React, { useState } from "react";
import NodesButton from "../general/NodesButton";
import ToolsWrapper from "../tools/ToolsWrapper";
import classes from "./CanvasWrapper.module.css";
import nodeList from "../nodeList";

const CanvasWrapper = (props) => {
  const [nodes, setNodes] = useState([]);
  const [nodeId, setNodeId] = useState(0);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const handleActiveToolBox = (isOpen) => {
    setIsToolsOpen(isOpen);
  };

  const handleAddtool = (tool) => {
    const newTool = { ...tool, nodeId, parentNodeId: null };
    setNodeId((prev) => nodeId + 1);
    setIsToolsOpen(false);
    console.log(newTool);
    setNodes((prev) => {
      return [...prev, newTool];
    });
  };
  const handleAddCrossRoad = () => {};

  return (
    <div className={`${classes.wrapper}`}>
      <ToolsWrapper isActive={isToolsOpen} addTool={handleAddtool} />
      {nodes.length > 0 &&
        nodes.map((item) => {
          return React.createElement(nodeList[item.type], {
            id: item.id,
            nodeId: item.nodeId,
            title: item.title,
            parentNodeId: item.parentNodeId,
          });
        })}
      <NodesButton
        handleAddTool={handleActiveToolBox}
        handleAddCrossRoad={handleAddCrossRoad}
      />
    </div>
  );
};

export default CanvasWrapper;
