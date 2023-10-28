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

function LogIn() {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 w-full h-screen bg-white">
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View className="">
          <Text className="text-primary-green text-6xl font-bold text-center mt-20 ">
            Welcome {"\n"}Back
          </Text>
          <View className="flex flex-col gap-4 items-center mt-10 ">
            <TextInput
              className="w-[343px] h-[50px] bg-login-grey text-text-grey-2 border-2 border-border-grey rounded-lg p-3"
              placeholder="Email"
            ></TextInput>
            <TextInput
              className="w-[343px] h-[50px]  bg-login-grey text-text-grey-2 border-2 border-border-grey rounded-lg p-3"
              placeholder="Password"
            ></TextInput>
          </View>
          <View className="items-center">
            <Custombutton
              className="bg-primary-green hover:bg-light-grey font-bold py-3 w-80  rounded-full mt-8"
              onPress={() => nav.navigate("LogIn")}
              title="Log In"
              textstyles={"text-white font-bold text-xl text-center"}
            ></Custombutton>
            <Text className="text-lg text-primary-green text-center mt-6 font-bold">
              Forgot Your Password ?
            </Text>
            <Text className="text-lg text-primary-green text-center mt-36 font-bold">
              Don't have an Account ?
            </Text>
            <Custombutton
              className="bg-primary-green hover:bg-light-grey font-bold py-3 w-80  rounded-full mt-2 "
              onPress={() => nav.navigate("SignUp")}
              title="Sign Up"
              textstyles={"text-white font-bold text-xl text-center"}
            ></Custombutton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default LogIn;
