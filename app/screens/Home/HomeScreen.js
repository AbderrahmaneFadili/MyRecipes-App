import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";
import AppColors from "../../config/colors";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const HomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [photosArray] = useState([
    {
      url:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80",
      title: "Recipes",
    },
    {
      url:
        "https://images.unsplash.com/photo-1548866616-463d69c477f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=341&q=80",
      title: "Ingredients",
    },
    {
      url:
        "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=380&q=80",
      title: "Vedios",
    },
  ]);

  const renderImage = ({ item }) => (
    <View style={homeStyles.imageContainer}>
      <Image
        resizeMethod={"resize"}
        resizeMode="cover"
        style={homeStyles.image}
        source={{ uri: item.url }}
      />
      <Text style={homeStyles.imageTitle}>{item.title}</Text>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: AppColors.primary }}>
      <StatusBar style="dark" />
      <Carousel
        data={photosArray}
        renderItem={renderImage}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={photosArray.length}
        activeDotIndex={activeSlide}
        containerStyle={homeStyles.paginationContainer}
        dotColor="rgba(255, 255, 255, 0.92)"
        dotStyle={homeStyles.paginationDot}
        inactiveDotColor="white"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default HomeScreen;

const homeStyles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: viewportWidth,
    height: viewportHeight,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: viewportHeight,
  },
  paginationContainer: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: viewportHeight * 0.8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 4,
  },
  imageTitle: {
    color: "white",
    alignSelf: "center",
    marginTop: viewportHeight * 0.0,
    fontSize: 60,
    fontWeight: "bold",
  },
});
