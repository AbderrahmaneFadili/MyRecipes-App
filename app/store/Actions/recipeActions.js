import { get_recipe_by_id } from "../../api/index";
//constants
export const FETCH_RECIPE_BEGIN = "FETCH_RECIPE_BEGIN";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE";

//fetch Recipe Begin action creator
export const fetchRecipeBegin = () => {
  return {
    type: FETCH_RECIPE_BEGIN,
  };
};

//fetch Recipe Begin success action creator
export const fetchRecipeSuccess = (recipe) => {
  return {
    type: FETCH_RECIPE_SUCCESS,
    payload: { recipe },
  };
};
//fetch Recipe Begin failure action creator
export const fetchRecipeFailure = (error) => {
  return {
    type: FETCH_RECIPE_FAILURE,
    payload: { error },
  };
};

//get recipe by id action (return function(dispatch,getState)
export const fetchRecipe = (id) => (dispatch) => {
  dispatch(fetchRecipeBegin());
  get_recipe_by_id(id)
    .then((recipe) => {
      dispatch(fetchRecipeSuccess(recipe));
    })
    .catch((error) => dispatch(fetchRecipeFailure(error)));
};
