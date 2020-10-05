import React, { useEffect } from "react";
import {
  FlatList,
  Text,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import AppColors from "../../config/colors";
import { StatusBar } from "expo-status-bar";
import { fetchRecipesByCategory } from "../../store/Actions/recipesActions";
import { connect } from "react-redux";

import { useNavigation, useRoute } from "@react-navigation/native";

const RecipesListScreen = ({ recipes, loading, error, dispatch }) => {
  const nav = useNavigation();
  const { params } = useRoute();
  useEffect(() => {
    dispatch(fetchRecipesByCategory(params.category));
  }, []);

  const onPressRecipe = (id) => {
    nav.navigate("RecipeScreen", { id });
  };
  const renderRecipes = (item) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPressRecipe(item.idMeal)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.strMealThumb }} />
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.category}>{params.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.primary,
        alignItems: "center",
      }}
    >
      <StatusBar style="dark" />
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
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.items,
    loading: state.recipes.loading,
    error: state.recipes.error,
  };
};
export default connect(mapStateToProps)(RecipesListScreen);
