import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";
import { bindActionCreators } from "redux"


const mapDispatchToProps = (dispatch) => {
  return {
    set: bindActionCreators(setSpecialText, dispatch)
  } 
}

export default connect(null,mapDispatchToProps)(SpecialTextBox);
