import React from "react";
import { Marker } from "react-native-maps";

const CustomMarker = ({ coordinate, onPress }) => {
  return <Marker coordinate={coordinate} onPress={onPress} />;
};

export default CustomMarker;
