import classes from "./TopMenu.module.css";

const TopMenu = (props) => (
  <div className={`${classes.menu}`}>
    <h3>Top Menu</h3>
    <button>Run</button>
  </div>
);

export default TopMenu;
