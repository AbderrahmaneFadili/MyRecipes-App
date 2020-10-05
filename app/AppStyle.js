import { StyleSheet, Dimensions } from "react-native";
import AppColors from "../app/config/colors";
// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 20,
    width: SCREEN_WIDTH * 0.4,
    height: 225,
    borderColor: AppColors.secondary,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: AppColors.primary,
  },
  photo: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: AppColors.secondary,
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
});
