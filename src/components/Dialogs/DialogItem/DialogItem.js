import React from "react";
import classes from "./../Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <img src={props.avatar} alt="" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
