import React, { useLayoutEffect } from "react";
import { View, Text, Button, Image, Linking } from "react-native";
import Custombutton from "../components/Custombutton";
import { useNavigation } from "@react-navigation/native";
const CustomWidget = ({ shelter, description, link, onClose }) => {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="bg-white rounded-full h-72">
      <Custombutton
        className="pl-4 pt-4 "
        textstyles={"text-xl font-bold"}
        title="X"
        onPress={onClose}
      />
      <Text className="text-black text-xl font-bold text-center">
        {shelter}
      </Text>
      <Text className="text-text-grey text-xl font-bold text-center">
        {description}
      </Text>
      <View className="items-center justify-center">
        <View className="border-2 border-text-grey-2 grid grid-cols-2 w-40 rounded-lg mt-4 ">
          <Custombutton
            textstyles={"text-text-grey text-xl text-center"}
            title="Visit Official Page"
            onPress={() => nav.navigate(link)}
            className=""
          ></Custombutton>
        </View>
      </View>
    </View>
  );
};

export default CustomWidget;
