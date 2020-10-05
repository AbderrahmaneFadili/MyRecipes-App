import {
  FETCH_RECIPE_BEGIN,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
} from "../Actions/recipeActions";

//initial state
const initialState = { loading: false, item: null, error: null };

//recipe reducer
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        item: null,
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload.recipe,
      };
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        item: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default recipeReducer;
