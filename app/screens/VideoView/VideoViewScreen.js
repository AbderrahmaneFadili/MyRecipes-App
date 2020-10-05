import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native";
const VideoViewScreen = () => {
  const {
    params: { videoUri },
  } = useRoute();
  return <WebView source={{ uri: videoUri }} />;
};

export default VideoViewScreen;
