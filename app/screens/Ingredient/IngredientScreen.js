import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import AppColors from "../../config/colors";
import { StatusBar } from "expo-status-bar";
import { fetchRecipesByIngredient } from "../../store/Actions/recipesActions";

const IngredientScreen = ({ recipes, loading, error, dispatch }) => {
  const {
    params: { ingredient, imageUrl },
  } = useRoute();

  const nav = useNavigation();

  const onPressRecipe = (item) => {
    nav.navigate("RecipeScreen", { id: item.idMeal });
  };
  //renderRecipes
  const renderRecipes = (item) => {
    return (
      <TouchableOpacity onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.strMealThumb }} />
          <Text style={styles.title}>{item.strMeal}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(fetchRecipesByIngredient(ingredient));
  }, []);

  return (
    <ScrollView
      style={[styles.mainContainer, { backgroundColor: AppColors.primary }]}
    >
      <StatusBar style="dark" />
      <View
        style={{
          marginBottom: 30,
          marginTop: 10,
        }}
      >
        <Image style={styles.photoIngredient} source={{ uri: imageUrl }} />
      </View>
      <Text style={styles.ingredientInfo}>Recipes with {ingredient}:</Text>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
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
        {recipes.length > 0 && (
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={recipes}
            renderItem={({ item }) => renderRecipes(item)}
            keyExtractor={(item, i) => i.toString()}
          />
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.items,
    loading: state.recipes.loading,
    error: state.recipes.error,
  };
};
export default connect(mapStateToProps)(IngredientScreen);
