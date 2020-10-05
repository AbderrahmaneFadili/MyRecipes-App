import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
const MenuImage = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.headerButtonContainer}
      onPress={() => navigation.openDrawer()}
    >
      <Image
        style={styles.headerButtonImage}
        source={require("../../../assets/icons/menu.png")}
      />
    </TouchableOpacity>
  );
};

export default MenuImage;
