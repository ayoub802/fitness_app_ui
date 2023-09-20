import { View, Text,ImageBackground, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Button from '../components/Button';

const OnBoardingScreen = ({ navigation }) => {
    const { height } = Dimensions.get("window");

    const handlePress = () => navigation.navigate("Home");
  return (
        <ImageBackground
        source={require("../assets/images/onboarding.jpeg")}
        style={{
            flex: 1,
            justifyContent: "flex-end",
        }}
    >
            <LinearGradient
            style={{
                paddingHorizontal: Spacing.padding.lg,
            }}
            colors={[`rgba(0,0,0,0.1)`, "#000"]}
            >
            <Text
                style={{
                fontSize: FontSize.xxl,
                color: Colors.text,
                fontFamily: Font["poppins-semiBold"],
                textAlign: "center",
                marginBottom: 15
                }}
            >
                Stay health even if you stay at home
            </Text>
            <Button onPress={handlePress}>Get Started</Button>
            <Text
                style={{
                fontSize: FontSize.base,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "center",
                marginTop: Spacing.margin.base,
                marginBottom: Spacing.margin.xxl,
                }}
            >
                Staying fit to keep you in good condition can now go through mobile
                apps
            </Text>
            </LinearGradient>
        </ImageBackground>
  )
}

export default OnBoardingScreen