import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyle";
import AppColors from "../../config/colors";

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: "bold",
    fontSize: 20,
  },
  photoIngredient: {
    width: "100%",
    height: 330,
    alignSelf: "center",
  },
  ingredientInfo: {
    color: "black",
    margin: 10,
    fontSize: 19,
    textAlign: "left",
    fontWeight: "bold",
  },
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  loading: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  error: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  errorText: {
    color: AppColors.secondary,
    fontSize: 28,
    marginBottom: 10,
  },
});

export default styles;
