console.disableYellowBox = true;
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import AppColors from "../config/colors";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import MenuImage from "../components/MenuImage/MenuImage";
import BackButton from "../components/BackButton/BackButton";
//Screens
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import VideoViewScreen from "../screens/VideoView/VideoViewScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import { LogBox, Text } from "react-native";
//Stack Navigator
const { Navigator, Screen } = createStackNavigator();

const RecipeScreenNavigationOptions = {
  headerTransparent: "true",
  headerStyle: {
    backgroundColor: AppColors.primary,
  },
  title: "Recipe",
  headerLeft: () => <BackButton />,
};

const IngredientScreenNavigationOptions = {
  headerStyle: {
    backgroundColor: AppColors.primary,
  },
  title: "Ingredient",
};
const IngredientsDetailsScreenNavigationOptions = {
  headerStyle: {
    backgroundColor: AppColors.primary,
  },
  title: "Ingredients",
};

const VideoViewScreenNavigationOptions = ({ route }) => {
  return {
    headerStyle: {
      backgroundColor: AppColors.primary,
    },
    title: route.params.recipeName,
  };
};

//Create the Categories Stack Navigator
const CategoriesStack = () => {
  return (
    <Navigator>
      <Screen
        name="CategoriesScreen"
        options={{
          title: "Categories",
          headerStyle: {
            backgroundColor: AppColors.primary,
          },
          headerLeft: () => <MenuImage />,
        }}
        component={CategoriesScreen}
      />
      <Screen
        name="RecipesListScreen"
        options={{
          title: "Recipes",
          headerStyle: {
            backgroundColor: AppColors.primary,
          },
        }}
        component={RecipesListScreen}
      />
      <Screen
        name="RecipeScreen"
        options={RecipeScreenNavigationOptions}
        component={RecipeScreen}
      />
      <Screen
        name="IngredientScreen"
        options={IngredientScreenNavigationOptions}
        component={IngredientScreen}
      />
      <Screen
        name="IngredientsDetailsScreen"
        options={IngredientsDetailsScreenNavigationOptions}
        component={IngredientsDetailsScreen}
      />
      <Screen
        name="VideoViewScreen"
        options={VideoViewScreenNavigationOptions}
        component={VideoViewScreen}
      />
    </Navigator>
  );
};
//create home stack
const HomeStk = createStackNavigator();
const HomeStack = () => {
  return (
    <HomeStk.Navigator>
      <HomeStk.Screen
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: AppColors.primary,
          },
          headerLeft: (props) => {
            return <MenuImage />;
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </HomeStk.Navigator>
  );
};
//create Search Stack
const SearchStk = createStackNavigator();
const SearchStack = () => {
  return (
    <SearchStk.Navigator>
      <SearchStk.Screen
        options={({ route, navigation }) => ({
          headerLeft: () => {
            return (
              <AntDesign
                style={{
                  marginLeft: 10,
                }}
                name="arrowleft"
                size={26}
                onPress={() => navigation.goBack()}
                color="black"
              />
            );
          },
          headerRight: () => <MenuImage />,
          headerStyle: {
            backgroundColor: AppColors.primary,
          },
        })}
        name="SearchScreen"
        component={SearchScreen}
      />
      <SearchStk.Screen
        name="RecipeScreen"
        options={RecipeScreenNavigationOptions}
        component={RecipeScreen}
      />
      <SearchStk.Screen
        name="IngredientsDetailsScreen"
        options={IngredientsDetailsScreenNavigationOptions}
        component={IngredientsDetailsScreen}
      />
      <SearchStk.Screen
        name="IngredientScreen"
        options={IngredientScreenNavigationOptions}
        component={IngredientScreen}
      />
      <SearchStk.Screen
        name="VideoViewScreen"
        options={VideoViewScreenNavigationOptions}
        component={VideoViewScreen}
      />
    </SearchStk.Navigator>
  );
};

//Create drawer Navigator
const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: AppColors.primary,
        inactiveTintColor: AppColors.secondary,
        activeTintColor: AppColors.secondary,
        labelStyle: {
          fontSize: 15,
          textTransform: "uppercase",
        },
      }}
      drawerContent={(props) => <DrawerContainer {...props} />}
    >
      <Drawer.Screen
        options={{
          title: "Home",
          drawerLabel: "Home",
          drawerIcon: () => (
            <Entypo name="home" color={AppColors.secondary} size={26} />
          ),
        }}
        name="HomeScreen"
        component={HomeStack}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Categories",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="food"
              color={AppColors.secondary}
              size={26}
            />
          ),
        }}
        name="Categories"
        component={CategoriesStack}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "Search",
          drawerIcon: () => (
            <FontAwesome name="search" color={AppColors.secondary} size={26} />
          ),
        }}
        name="SearchScreen"
        component={SearchStack}
      />
    </Drawer.Navigator>
  );
};
//App Container
const AppContainer = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
};

export default AppContainer;
