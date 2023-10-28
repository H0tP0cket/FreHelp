import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Custombutton from "../components/Custombutton";

function SignUp() {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 w-full h-screen-full bg-primary-green">
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View className="">
          <Text className="text-white text-6xl font-bold text-center mt-20  ">
            FreHelp{"\n"}Sign Up
          </Text>
          <View className="flex flex-col gap-4 items-center mt-8 ">
            <TextInput
              className="w-[343px] h-[50px] bg-accent-green text-white rounded-lg p-3"
              placeholder="Shelter Name"
            ></TextInput>
            <TextInput
              className="w-[343px] h-[50px] bg-accent-green text-white rounded-lg p-3"
              placeholder="Email"
            ></TextInput>
            <TextInput
              className="w-[343px] h-[50px] bg-accent-green text-white rounded-lg p-3"
              placeholder="Password"
            ></TextInput>

            <TextInput
              className="w-[343px] h-[50px] bg-accent-green text-white rounded-lg p-3"
              placeholder="Confirm Password"
            ></TextInput>
          </View>
          <View className="items-center">
            <Custombutton
              className="bg-white hover:bg-light-grey font-bold py-4 w-80  rounded-full mt-8"
              onPress={() => nav.navigate("LogIn")}
              title="Sign Up"
              textstyles={"text-primary-green font-bold text-xl text-center"}
            ></Custombutton>

            <Text className="text-lg text-white text-center mt-36 font-bold">
              Already have an account ?
            </Text>
            <Custombutton
              className="bg-accent-green hover:bg-light-grey font-bold py-4 w-80  rounded-full mt-2 "
              onPress={() => nav.navigate("LogIn")}
              title="Log In"
              textstyles={"text-white font-bold text-xl text-center"}
            ></Custombutton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default SignUp;
