import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import AppColors from "../../config/colors";

const ViewVideoButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Entypo name="youtube" size={24} color={AppColors.secondary} />
        <Text style={styles.text}>View Cooking Video</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ViewVideoButton;
