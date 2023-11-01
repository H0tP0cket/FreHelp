import React, { useState } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Custombutton from "../components/Custombutton";

function LogIn() {
  const nav = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogin = () => {
    const users = {
      "volunteer@tcvfoodbank.org": "TCVFoodBank",
      "sidsrinivasan6@gmail.com": "Placeholder",
      "info@abode.org": "Abode",
      "frc@fremont.gov": "FremontFamily",
      "sfritz@cpcfremont.org": "Centerville",
      "violablythectr@gmail.com": "Viola",
      "bekfastjohn@gmail.com": "johniscool",
    };

    if (users[email] === password) {
      nav.navigate(password);
    } else {
      alert("Incorrect Login Details");
    }
  };

  return (
    <View className="flex-1 w-full h-screen bg-white-back">
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
              onChangeText={setEmail}
            />
            <TextInput
              className="w-[343px] h-[50px]  bg-login-grey text-text-grey-2 border-2 border-border-grey rounded-lg p-3"
              placeholder="Password"
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View className="items-center">
            <Custombutton
              className="bg-primary-green hover:bg-light-grey font-bold py-3 w-80  rounded-full mt-8"
              onPress={handleLogin}
              title="Log In"
              textstyles="text-white font-bold text-xl text-center"
            ></Custombutton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default LogIn;
