import React, { useLayoutEffect, useState } from "react";
import { View, Text, Image, Linking } from "react-native";
import Custombutton from "./Custombutton";
import { useNavigation } from "@react-navigation/native";
const ShelterScreen = ({ route }) => {
  const {
    name,
    logo,
    mission,
    donatelink,
    weblink,
    contact,

    providelink,
  } = route.params;
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 bg-white-back items-center mt-10 ">
      <View className=" bg-primary-green w-96 rounded-lg ">
        <View className="block mb-6 ml-10 ">
          <Text className="text-white font-bold text-2xl mt-6">{name}</Text>
          <Text className="text-black text-xl ">{mission}</Text>
        </View>
      </View>

      <View className="flex flex-col gap-4 items-center mt-10 bg-white h-[305px] w-96 ">
        <Custombutton
          className="w-[343px] h-[50px]  text-black text-lg    p-3"
          title="Donate"
          subtitle="Send monetary/item donations "
          subtitlestyles={"text-text-grey pl-2 pt-1"}
          textstyles={"text-xl font-bold"}
          onPress={() => Linking.openURL(donatelink)}
        ></Custombutton>

        <Custombutton
          className="w-[343px] h-[50px]  text-black text-lg    p-3"
          title="View Provided Services"
          subtitle="See what services we provide "
          subtitlestyles={"text-text-grey pl-2 pt-1"}
          textstyles={"text-xl font-bold"}
          onPress={() => Linking.openURL(providelink)}
        ></Custombutton>
        <Custombutton
          className="w-[343px] h-[50px]  text-black text-lg    p-3"
          title="Sign up to Volunteer"
          subtitle="Click to Volunteer "
          subtitlestyles={"text-text-grey pl-2 pt-1"}
          textstyles={"text-xl font-bold"}
          onPress={() => nav.navigate("Volunteering")}
        ></Custombutton>
      </View>
      <Text className="text-grey font-bold text-2xl mt-6 ">More</Text>
      <View className="flex flex-col gap-4 items-center mt-4 bg-white h-[170px] w-96 ">
        <Custombutton
          className="w-[343px] h-[50px]  text-black text-lg    p-3"
          title="Visit Website"
          subtitle="More Official Info "
          subtitlestyles={"text-text-grey pl-2 pt-1"}
          textstyles={"text-xl font-bold"}
          onPress={() => nav.navigate(weblink)}
        ></Custombutton>
        <Custombutton
          className="w-[343px] h-[50px]  text-black text-lg    p-3"
          title="Contact Info"
          subtitle="Reach out!"
          subtitlestyles={"text-text-grey pl-2 pt-1"}
          textstyles={"text-xl font-bold"}
          onPress={() => nav.navigate(contact)}
        ></Custombutton>
      </View>
    </View>
  );
};

export default ShelterScreen;
