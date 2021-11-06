import React from "react";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = () => {
    return ({ isActive }) => (isActive ? `${classes.active}` : "");
  };
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink className={activeLink()} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={activeLink()} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
