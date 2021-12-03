import React from "react";
import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://www.shopolog.ru/upload/medialibrary/a7f/a7f913fbb8090426218c762cf6f91e17.png"
        alt=""
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
