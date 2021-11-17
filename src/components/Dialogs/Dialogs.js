import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  let dialogsElements = state.dialogs.map((item) => (
    <DialogItem
      name={item.name}
      id={item.id}
      key={item.id}
      avatar={item.avatar}
    />
  ));

  let messagesElements = state.messages.map((item) => (
    <Message message={item.message} id={item.id} key={item.id} />
  ));

  return (
    <>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messagesContainer}>
          <div className={classes.messages}>{messagesElements}</div>
        </div>
      </div>
      <div className={classes.addMessage}>
        <textarea
          placeholder={"Enter your message"}
          onChange={onNewMessageChange}
          value={state.newMessageBody}
        />
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </>
  );
};

export default Dialogs;
