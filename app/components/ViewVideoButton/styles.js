import { StyleSheet } from "react-native";
import AppColors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: 270,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    borderColor: AppColors.secondary,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.primary,
    flexDirection: "row",
  },
  text: {
    fontSize: 14,
    color: AppColors.secondary,
    marginLeft: 10,
  },
});

export default styles;
