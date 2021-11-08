import React from "react";
import classes from "./../Dialogs.module.scss";

const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

export default Message;
