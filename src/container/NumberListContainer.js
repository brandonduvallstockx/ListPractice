import { connect } from 'react-redux';
import NumberList from '../components/NumberList';

const mapStateToProps = state => {
  console.log("In Container: ", state);
  return {
    numberslist: state.numberslist
  }
};

export default connect(
  mapStateToProps
)(NumberList);
