import React from "react";
import classes from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/state";

// const DialogsItem = (props) => {
//   const path = `/dialogs/${props.id}`;
//   return (
//     <div className={classes.dialog + " " + classes.active}>
//       <NavLink to={path}>{props.name}</NavLink>
//     </div>
//   );
// };
//
// const Message = (props) => {
//   return <div className={classes.dialog}>{props.message}</div>;
// };

// let dialogsData = [
//   { id: 1, name: "Anna" },
//   { id: 2, name: "Andrey" },
//   { id: 3, name: "Sanja" },
//   { id: 4, name: "Vitaly" },
//   { id: 5, name: "Ivan" },
// ];
// let messagesData = [
//   { id: 1, message: "Hello" },
//   { id: 2, message: "Hi, how you health" },
//   { id: 3, message: "Hello, how are you" },
//   { id: 4, message: "I`m crazy" },
//   { id: 5, message: "I love layout" },
// ];

const Dialogs = ({ state, dispatch }) => {
  let newMessageRef = React.createRef();
  const addMessage = () => {
    // let text = newMessageRef.current.value;

    dispatch(addMessageActionCreator());
    // console.log(text);
  };

  const onMessageChange = () => {
    let text = newMessageRef.current.value;
    let action = updateMessageTextActionCreator(text);
    dispatch(action);
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
          ref={newMessageRef}
          name=""
          id=""
          cols="20"
          rows="5"
          onChange={onMessageChange}
          value={state.newMessageText}
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </>
  );
};

export default Dialogs;
