import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      let action = updateNewMessageBodyCreator(body);
      dispatch(action);
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(Dialogs);

// const AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
