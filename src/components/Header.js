import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, toggleShowAddTask, showAdd }) {
  const loc = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      { loc.pathname === '/' &&
        (<Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          onClick={toggleShowAddTask}
        />)
      }
    </header>
  );
}

Header.defaultProps = {
  title: "Task Manager",
};

export default Header;
