import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import HomeView from "../views/HomeView";
import PlayingNowView from "../views/PlayingNowView";
import { HomeIcon, SettingsIcon } from "../components/Icons";

const Tab = createBottomTabNavigator();

export default function BottomTaService() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FEFEFE",
        tabBarInactiveTintColor: "#A3A4A5",
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "#000000",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="HomeView"
        component={HomeView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} width={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={PlayingNowView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={color} width={size} q />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
});
