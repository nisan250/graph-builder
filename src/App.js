import SideMenu from "./components/layout/SideMenu";
import TopMenu from "./components/layout/TopMenu";

import classes from "./App.module.css";
import CanvasWrapper from "./components/canvas/CanvasWrapper";

function App() {
  return (
    <div className={classes.app}>
      <SideMenu />
      <div className={classes["right-panel"]}>
        <TopMenu />
        <CanvasWrapper />
      </div>
    </div>
  );
}

export default App;
