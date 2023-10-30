import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import Home from "./screens/Hero";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import Volunteering from "./screens/Volunteering";
import Map from "./screens/Map";
import data from "./components/Data.json";
import ShelterScreen from "./components/ShelterScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Volunteering" component={Volunteering} />
        {data.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={ShelterScreen}
            initialParams={{
              name: item.name,
              logo: item.logo,
              mission: item.mission,
              donatelink: item.donatelink,
              weblink: item.weblink,
              contact: item.contact,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
