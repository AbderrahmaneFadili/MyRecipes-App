import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuImage/MenuImage";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
const DrawerContainer = (props) => {
  // const navigation = useNavigation();
  return (
    <DrawerContentScrollView contentContainerStyle={styles.content} {...props}>
      <StatusBar style="dark" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerContainer;
DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
