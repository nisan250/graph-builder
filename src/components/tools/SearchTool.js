import classes from "./SearchTool.module.css";

const SearchTool = (props) => (
  <div className={`${classes.search}`}>
    <label for="search">Select Tool </label>
    <input type="text" id="search" name="search" placeholder="Search..." />
  </div>
);

export default SearchTool;
