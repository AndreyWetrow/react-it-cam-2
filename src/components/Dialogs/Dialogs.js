import React from "react";
import classes from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogsItems = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogsItems name={"Anna"} id={1} />
        <DialogsItems name={"Andrey"} id={2} />
        <DialogsItems name={"Sanja"} id={3} />
        <DialogsItems name={"Vitaly"} id={4} />
        <DialogsItems name={"Ivan"} id={5} />
      </div>
      <div className={classes.messages}>
        <Message message={"Hello"} />
        <Message message={"Hi, how you health"} />
        <Message message={"Hello, how are you"} />
      </div>
    </div>
  );
};

export default Dialogs;
