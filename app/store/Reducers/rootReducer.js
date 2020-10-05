import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import recipes from "./recipesReducer";
import recipe from "./recipeReducer";
//combine the Reducers
const rootReducer = combineReducers({
  categories,
  recipes,
  recipe,
});

export default rootReducer;
