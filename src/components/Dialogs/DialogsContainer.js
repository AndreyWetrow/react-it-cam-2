import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

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

const SurerDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default SurerDialogsContainer;
