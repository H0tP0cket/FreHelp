import React, { useLayoutEffect, useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import CustomMarker from "../components/CustomMarker";
import CustomWidget from "../components/CustomWidget";
import Custombutton from "../components/Custombutton";
import CustomMapStyle from "../components/CustomMapStyle.json";

function Map() {
  const [selectedMarkerA, setSelectedMarkerA] = useState(null);
  const [selectedMarkerB, setSelectedMarkerB] = useState(null);
  const [selectedMarkerC, setSelectedMarkerC] = useState(null);
  const [selectedMarkerD, setSelectedMarkerD] = useState(null);
  const [selectedMarkerE, setSelectedMarkerE] = useState(null);

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
                className="  text-xl text-center px-4 py-2 z-10 mt-10 ml-10 bg-white rounded-xl"
                title="<"
                textstyles={"text-xl text-center"}
                onPress={() => nav.navigate("Home")}
              >
                Back
              </Custombutton>
              <Text className="  text-xl text-center px-4 py-2 z-10 mt-10 ml-20 bg-white rounded-xl">
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
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            followsUserLocation={true}
            customMapStyle={CustomMapStyle}
          >
            <CustomMarker
              coordinate={{ latitude: 37.555931, longitude: -122.00766 }}
              onPress={() => setSelectedMarkerA("TCV Food Bank")}
            />
            <CustomMarker
              coordinate={{ latitude: 37.55078, longitude: -121.98309 }}
              onPress={() =>
                setSelectedMarkerB("Fremont Family Resource Center")
              }
            />
            <CustomMarker
              coordinate={{ latitude: 37.49474, longitude: -121.9284 }}
              onPress={() =>
                setSelectedMarkerC("Abode Services Sunrise Village")
              }
            />
            <CustomMarker
              coordinate={{ latitude: 37.55227, longitude: -122.00666 }}
              onPress={() => setSelectedMarkerD("Centerville Free Dining Room")}
            />
            <CustomMarker
              coordinate={{ latitude: 37.555931, longitude: -122.00766 }}
              onPress={() => setSelectedMarkerE("TCV Food Bank")}
            />
          </MapView>

          {selectedMarkerA && (
            <CustomWidget
              shelter={selectedMarkerA}
              description="Food Bank and Aid Shelter"
              link="Shelter"
              onClose={() => setSelectedMarkerA(null)}
            />
          )}
          {selectedMarkerB && (
            <CustomWidget
              shelter={selectedMarkerB}
              description="Shelter for the Homeless"
              link="Shelter"
              onClose={() => setSelectedMarkerB(null)}
            />
          )}
          {selectedMarkerC && (
            <CustomWidget
              shelter={selectedMarkerC}
              description="Food Bank and Aid Shelter"
              link="Shelter"
              onClose={() => setSelectedMarkerC(null)}
            />
          )}
          {selectedMarkerD && (
            <CustomWidget
              shelter={selectedMarkerD}
              description="Food Bank and Aid Shelter"
              link="Shelter"
              onClose={() => setSelectedMarkerD(null)}
            />
          )}
          {selectedMarkerE && (
            <CustomWidget
              shelter={selectedMarkerE}
              description="Food Bank and Aid Shelter"
              link="Shelter"
              onClose={() => setSelectedMarkerE(null)}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Map;
