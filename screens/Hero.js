import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Custombutton from "../components/Custombutton";
function Hero() {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-primary-green">
      <Text className="text-white text-8xl font-bold -mt-64">FreHelp</Text>
      <Text className="text-white text-6xl text-center font-bold mt-8 mb-20">
        I am a ...
      </Text>
      <Custombutton
        title="Shelter "
        onPress={() => nav.navigate("LogIn")}
        className="bg-primary-green text-primary-green font-bold py-4  w-80   "
        textstyles={"text-white text-center font-bold text-4xl"}
      ></Custombutton>

      <Custombutton
        title="Volunteer "
        onPress={() => nav.navigate("Map")}
        className="bg-primary-green text-primary-green font-bold py-4  w-80   "
        textstyles={"text-white text-center font-bold text-4xl"}
      ></Custombutton>

      <Custombutton
        title="Person in Need "
        onPress={() => nav.navigate("Map")}
        className="bg-primary-green text-primary-green font-bold py-4  w-80  "
        textstyles={"text-white text-center font-bold text-4xl"}
      ></Custombutton>
    </View>
  );
}
export default Hero;
