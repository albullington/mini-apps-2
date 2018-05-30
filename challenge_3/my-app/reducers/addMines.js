import { RESET_BOARD, SHOW_SQUARE } from '../actions/boardActions';
import defaultStore from './defaultStore';

const mineSetter = (state = defaultStore, action = { type: '' }) => {
  switch (action.type) {
    case RESET_BOARD: {
      
    }
    case SHOW_SQUARE: {
      const board;
    }
  }
}