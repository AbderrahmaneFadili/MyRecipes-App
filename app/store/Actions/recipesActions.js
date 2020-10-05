//get recipes by category
import {
  get_recipes_by_category,
  get_recipes_by_ingredient,
  get_recipes_by_recipeName,
} from "../../api/index";

//constants
export const FETCH_RECIPES_BEGIN = "FETCH_RECIPES_BEGIN";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

//fetch Recipes Begin action creator
export const fetchRecipesBegin = () => {
  return {
    type: FETCH_RECIPES_BEGIN,
  };
};

//fetch Recipes Begin success action creator
export const fetchRecipesSuccess = (recipes) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: { recipes },
  };
};
//fetch Recipes Begin failure action creator (return function(dispatch,getState))
export const fetchRecipesFailure = (error) => {
  return {
    type: FETCH_RECIPES_FAILURE,
    payload: { error },
  };
};

//get recipes by category action
export const fetchRecipesByCategory = (category) => (dispatch) => {
  dispatch(fetchRecipesBegin());
  get_recipes_by_category(category)
    .then((recipes) => dispatch(fetchRecipesSuccess(recipes)))
    .catch((error) => dispatch(fetchRecipesFailure(error)));
};

//get recipes by ingredient action
export const fetchRecipesByIngredient = (ingredient) => (dispatch) => {
  dispatch(fetchRecipesBegin());
  get_recipes_by_ingredient(ingredient)
    .then((recipes) => dispatch(fetchRecipesSuccess(recipes)))
    .catch((error) => dispatch(fetchRecipesFailure(error)));
};

//get recipes by recipeName action
export const fetchRecipesByRecipeName = (recipeName) => (dispatch) => {
  get_recipes_by_recipeName(recipeName)
    .then((recipes) => dispatch(fetchRecipesSuccess(recipes)))
    .catch((error) => dispatch(fetchRecipesFailure(error)));
};
