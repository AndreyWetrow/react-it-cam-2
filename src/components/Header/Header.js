import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://www.shopolog.ru/upload/medialibrary/a7f/a7f913fbb8090426218c762cf6f91e17.png"
        alt=""
      />
    </header>
  );
};

export default Header;
