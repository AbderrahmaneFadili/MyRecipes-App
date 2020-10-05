import {
  FETCH_RECIPES_BEGIN,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
} from "../Actions/recipesActions";

//initilal state
const initialState = {
  loading: false,
  items: [],
  error: null,
};

//recipes Reducer
const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        items: [],
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.recipes,
        error: null,
      };
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload.error,
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default recipesReducer;
