import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import AppColors from "../../config/colors";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/Actions/categoriesActions";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = ({ categories, loading, error, dispatch }) => {
  //navigation
  const nav = useNavigation();

  const onPressCategory = ({ category }) => {
    nav.navigate("RecipesListScreen", { category });
  };

  const renderCategory = (item) => (
    <TouchableOpacity onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.imageUrl }} />
        <Text style={styles.categoriesName}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <View style={{ backgroundColor: AppColors.primary, flex: 1 }}>
      <StatusBar style="dark" />
      {/* if loading is true */}
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator color={AppColors.secondary} size={50} />
        </View>
      )}
      {/* if error not null */}
      {error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      {/* if categories not empty  */}
      {categories.length > 0 && (
        <FlatList
          data={categories}
          renderItem={({ item }) => renderCategory(item)}
          keyExtractor={(item, i) => i.toString()}
        />
      )}
    </View>
  );
};

//map state to props
const mapStateToProps = (state) => {
  return {
    categories: state.categories.items,
    loading: state.categories.loading,
    error: state.categories.error,
  };
};
export default connect(mapStateToProps)(CategoriesScreen);
