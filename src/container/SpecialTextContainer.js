import { connect } from 'react-redux';
// import {setCurrentUser} from "../actions";
import SpecialText from "../components/SpecialText";


//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    text: state.specialText
  }
}

export default connect(mapStateToProps)(SpecialText);
