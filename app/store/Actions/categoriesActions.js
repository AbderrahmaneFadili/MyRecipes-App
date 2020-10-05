//get_categories function for fetch categories form API
import { get_categories } from "../../api/index";
//constants
export const FETCH_CATEGORIES_BEGIN = "FETCH_CATEGORIES_BEGIN";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

//fetch Categories Begin action creator
export const fetchCategoriesBegin = () => {
  return {
    type: FETCH_CATEGORIES_BEGIN,
  };
};

//fetch Categories Begin success action creator
export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: { categories },
  };
};
//fetch Categories Begin failure action creator
export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: { error },
  };
};

//fetch categories "action" using fetch api
export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesBegin());
  get_categories()
    .then((categories) => dispatch(fetchCategoriesSuccess(categories)))
    .catch((error) => dispatch(fetchCategoriesFailure(error)));
};
