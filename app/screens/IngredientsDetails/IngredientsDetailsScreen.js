import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import AppColors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
const IngredientDetailsScreen = ({ route }) => {
  const { ingredients } = route.params;
  const nav = useNavigation();
  const onPressIngredient = ({ ingredient, imageUrl }) => {
    nav.navigate("IngredientScreen", { ingredient, imageUrl });
  };
  const renderIngredient = (item) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPressIngredient(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.imageUrl }} />
        <Text style={styles.title}>{item.ingredient + " " + item.measure}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.primary,
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <StatusBar style="dark" />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredients}
        renderItem={({ item }) => renderIngredient(item)}
        keyExtractor={(item, i) => i.toString()}
      />
    </View>
  );
};

export default IngredientDetailsScreen;
