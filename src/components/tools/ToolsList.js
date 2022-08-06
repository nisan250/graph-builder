import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import classes from "./ToolsList.module.css";

const ToolsList = (props) => {
  const [tools, setTools] = useState([]);
  const { isLoading, error, sendRequest: fetchTools } = useHttp();
  let content = "No Data Found...";

  const handleToolSelection = (item) => {
    props.addTool(item);
  };

  useEffect(() => {
    const transformPages = (toolsObj) => {
      setTools(toolsObj);
    };

    fetchTools({ url: "./tools.json" }, transformPages);
  }, [fetchTools]);

  if (tools.length > 0) {
    content = (
      <ul>
        {tools.map((tool) => (
          <li
            key={tool.id}
            type={tool.type}
            onClick={handleToolSelection.bind(null, tool)}
          >
            {tool.title}
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    content = <button onClick={fetchTools}>Error: Try again</button>;
  }

  if (isLoading) {
    content = "Loading Tools...";
  }

  return <div className={`${classes.list}`}>{content}</div>;
};

export default ToolsList;
