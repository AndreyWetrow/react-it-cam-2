import React, { Suspense } from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import Preloader from "../common/preloader/Preloader";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  // const onSendMessageClick = () => {
  //   props.sendMessage();
  // };
  //
  // const onNewMessageChange = (e) => {
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  // };
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

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
      <AddMessageForm onSubmit={addNewMessage} />
    </>
  );
};

// const maxLength100 = maxLengthCreator(100);
//
// const AddMessageForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div className={classes.addMessage}>
//         <Field
//           component={Textarea}
//           validate={[required, maxLength100]}
//           name={"newMessageBody"}
//           placeholder={"Enter your message"}
//         />
//
//         <button>Send</button>
//       </div>
//     </form>
//   );
// };
//
// const AddMessageFormRedux = reduxForm({ form: "dialogsAddMessageForm" })(
//   AddMessageForm
// );
export default Dialogs;
