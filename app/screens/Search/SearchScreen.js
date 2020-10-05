import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { SearchBar } from "react-native-elements";

import { connect } from "react-redux";
import AppColors from "../../config/colors";
import { fetchRecipesByRecipeName } from "../../store/Actions/recipesActions";
import styles from "./styles";

const SearchScreen = ({ recipes, loading, error, dispatch }) => {
  const nav = useNavigation();
  const [search, setSearch] = useState(null);

  const updateSearch = (text) => setSearch(text);
  useLayoutEffect(() => {
    //set nav options using useNavigation hook
    nav.setOptions({
      headerTitle: () => (
        <SearchBar
          onChangeText={updateSearch}
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            flex: 1,
          }}
          inputContainerStyle={{
            backgroundColor: AppColors.primary,
          }}
          placeholderTextColor={AppColors.secondary}
          clearIcon
          round
          placeholder="Search"
          value={search}
        />
      ),
    });
  }, [nav]);

  const getRecipesData = () => {
    dispatch(fetchRecipesByRecipeName(search));
    //setSearch("");
  };
  useEffect(() => {
    //fetch recipes by the search
    getRecipesData();
  }, [search]);
  //on Press Recipe
  const onPressRecipe = ({ idMeal }) => {
    nav.navigate("RecipeScreen", { id: idMeal });
  };
  //render recipes
  const renderRecipes = (item) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.strMealThumb }} />
          <Text style={styles.title}>{item.strMeal}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: AppColors.primary }}>
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
      {recipes && (
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

export default connect(mapStateToProps)(SearchScreen);
