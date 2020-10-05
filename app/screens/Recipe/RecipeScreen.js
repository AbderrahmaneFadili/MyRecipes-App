import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";
import styles from "./styles";
import ViewVideoButton from "../../components/ViewVideoButton/ViewVideoButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import { fetchRecipe } from "../../store/Actions/recipeActions";
import AppColors from "../../config/colors";
const RecipeScreen = ({
  route,
  navigation,
  recipe,
  loading,
  error,
  dispatch,
}) => {
  //get Ingredients from recipe object
  const getIngredients = () => {
    let newIngredients = [];
    let Ingredients = [];
    let Measures = [];

    //get Ingredients & Measures
    for (const [key, value] of Object.entries(recipe)) {
      if (key.startsWith("strIngredient") && value !== null) {
        Ingredients.push(value);
      } else if (key.startsWith("strMeasure") && value !== null) {
        Measures.push(value);
      }
    }
    //get the newIngredients data
    newIngredients = Ingredients.map((I, i) => {
      return {
        ingredient: I,
        measure: Measures[i],
        imageUrl: `https://www.themealdb.com/images/ingredients/${I.replace(
          " ",
          "%20"
        )}\.png`,
      };
    });
    return newIngredients;
  };

  useEffect(() => {
    dispatch(fetchRecipe(route.params.id));
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator color={AppColors.secondary} size={50} />
        </View>
      )}
      {error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      {recipe !== null && (
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: recipe.strMealThumb }} />
          </View>
          <View style={styles.infoRecipeContainer}>
            <Text style={styles.infoRecipeName}>{recipe.strMeal}</Text>
            <View style={styles.infoContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate("RecipesList", {
                    category: recipe.strCategory,
                  })
                }
              >
                <Text style={styles.category}>
                  {recipe.strCategory && recipe.strCategory.toUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
              <ViewVideoButton
                onPress={() => {
                  navigation.navigate("VideoViewScreen", {
                    videoUri: recipe.strYoutube,
                    recipeName: recipe.strMeal,
                  });
                }}
              />
            </View>

            <View style={styles.infoContainer}>
              <ViewIngredientsButton
                onPress={() =>
                  navigation.navigate("IngredientsDetailsScreen", {
                    ingredients: getIngredients(),
                  })
                }
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoDescriptionRecipe}>
                {recipe.strInstructions}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.item,
    loading: state.recipe.loading,
    error: state.recipe.error,
  };
};
export default connect(mapStateToProps)(RecipeScreen);
