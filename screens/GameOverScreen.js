import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.adventureconsultants.com%2Fassets%2FUploads%2FHimalaya%2FNepal-Himalaya%2FEverest%2F_resampled%2FFillWyI4MDAiLCI0ODAiXQ%2FBtwn-Sth-summit-and-Hillary-Step-Resized-Web-Charley-Mace.jpg%3Fv%3D7c96c&imgrefurl=https%3A%2F%2Fwww.adventureconsultants.com%2Fexpeditions%2Fseven-summits%2Feverest%2F&tbnid=SB-g4hZyfMuDRM&vet=12ahUKEwjS07Diw5PzAhWPwyoKHRm0AT0QMygIegUIARDkAQ..i&docid=S4kOHmd38tPRMM&w=800&h=480&q=images%20summit%20of%20everest&ved=2ahUKEwjS07Diw5PzAhWPwyoKHRm0AT0QMygIegUIARDkAQ",
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default GameOverScreen;
