import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import AppColors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => nav.goBack()}
      style={styles.btnContainer}
    >
      <Ionicons name="ios-arrow-back" size={26} color={AppColors.secondary} />
    </TouchableOpacity>
  );
}
