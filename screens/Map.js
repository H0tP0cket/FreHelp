import React, { useLayoutEffect, useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import CustomMarker from "../components/CustomMarker";
import CustomWidget from "../components/CustomWidget";
import Custombutton from "../components/Custombutton";
import CustomMapStyle from "../components/CustomMapStyle.json";

function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ flex: 1, height: "100%", backgroundColor: "white" }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ flex: 1 }}>
          <View className="absolute ">
            <View className="flex-row">
              <Custombutton
                className="text-xl text-center px-4 py-2 z-10 mt-10 ml-10 h-[45] bg-white rounded-xl"
                title="<"
                textstyles="text-xl text-center"
                onPress={() => nav.navigate("Home")}
              >
                Back
              </Custombutton>
              <Text className="text-xl text-center px-4 py-2 z-10 mt-10 ml-20 bg-white rounded-xl">
                Fremont Shelters
              </Text>
            </View>
          </View>
          <MapView
            provider="google"
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.5485,
              longitude: -121.9886,
              latitudeDelta: 0.2322,
              longitudeDelta: 0.0921,
            }}
            followsUserLocation={true}
            customMapStyle={CustomMapStyle}
          >
            <CustomMarker
              coordinate={{ latitude: 37.555931, longitude: -122.00766 }}
              onPress={() => setSelectedMarker("A")}
            />
            <CustomMarker
              coordinate={{ latitude: 37.55078, longitude: -121.98309 }}
              onPress={() => setSelectedMarker("B")}
            />
            <CustomMarker
              coordinate={{ latitude: 37.49474, longitude: -121.9284 }}
              onPress={() => setSelectedMarker("C")}
            />
            <CustomMarker
              coordinate={{ latitude: 37.55227, longitude: -122.00666 }}
              onPress={() => setSelectedMarker("D")}
            />
            <CustomMarker
              coordinate={{ latitude: 37.52483, longitude: -122.03899 }}
              onPress={() => setSelectedMarker("E")}
            />
          </MapView>

          {selectedMarker === "A" && (
            <CustomWidget
              shelter="TCV Food Bank"
              description="Food Bank and Aid Shelter"
              link="TCV Food Bank"
              onClose={() => setSelectedMarker(null)}
            />
          )}
          {selectedMarker === "B" && (
            <CustomWidget
              shelter="Fremont Family Resource Center"
              description="Shelter for the Homeless"
              link="FremontFamily"
              onClose={() => setSelectedMarker(null)}
            />
          )}
          {selectedMarker === "C" && (
            <CustomWidget
              shelter="Abode Services Sunrise Village"
              description="All around services for those in need"
              link="Abode"
              onClose={() => setSelectedMarker(null)}
            />
          )}
          {selectedMarker === "D" && (
            <CustomWidget
              shelter="Centerville Free Dining Room"
              description="Food Bank and Aid Shelter"
              link="Centerville"
              onClose={() => setSelectedMarker(null)}
            />
          )}
          {selectedMarker === "E" && (
            <CustomWidget
              shelter="Viola Blythe Community Services Center"
              description="Food Bank and Aid Shelter"
              link="Viola"
              onClose={() => setSelectedMarker(null)}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Map;
