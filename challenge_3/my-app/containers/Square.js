import { connect } from 'react-redux';
import { SHOW_SQUARE } from '../actions/boardActions.js';
import Square from '../components/Square';

const mapStateToProps = (state, ownProps) => ownProps;

const mapDispatchToProps = (dispatch) => {
  isShown: (id) => {
    dispatch({
      type: SHOW_SQUARE, id
    });
  }
}

const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(Square);

export default SquareContainer;