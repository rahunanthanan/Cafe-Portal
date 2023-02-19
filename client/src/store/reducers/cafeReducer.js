import { FETCH_CAFES_SUCCESS, ADD_CAFE_SUCCESS, UPDATE_CAFE_SUCCESS, DELETE_CAFE_SUCCESS } from '../actions/actionTypes';

const initialState = {
  cafes: []
};

const cafeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAFES_SUCCESS:
      return { ...state, cafes: action.payload };
    case ADD_CAFE_SUCCESS:
      return { ...state, cafes: [...state.cafes, action.payload] };
    case UPDATE_CAFE_SUCCESS:
      const updatedCafes = state.cafes.map(cafe => {
        if (cafe.id === action.payload.id) {
          return action.payload;
        } else {
          return cafe;
        }
      });
      return { ...state, cafes: updatedCafes };
    case DELETE_CAFE_SUCCESS:
      const filteredCafes = state.cafes.filter(cafe => cafe.id !== action.payload);
      return { ...state, cafes: filteredCafes };
    default:
      return state;
  }
};

export default cafeReducer;
