import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validarors";
import classes from "../Dialogs.module.scss";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsConrtols";

const maxLength100 = maxLengthCreator(100);

let AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.addMessage}>
        <Field
          component={Textarea}
          validate={[required, maxLength100]}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
        />

        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialogsAddMessageForm" })(AddMessageForm);
