import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Dimensions, View } from "react-native";
import Camera from "./Screens/Camera";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";
import Resources from "./Screens/Resources";
import Signup from "./Screens/Signup";
import Transaction from "./Screens/Transaction";
import Upload from "./Screens/Upload";
import Otp from "./Screens/Otp";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const windowWidth = Dimensions.get("window").width;
  const widthPercentage = 90; // 80% of the screen width
  const width = (windowWidth * widthPercentage) / 100;
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { display: "flex" } }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={28} color="#1CAC78" />
            ) : (
              <AntDesign name="home" size={28} color="#1CAC78" />
            ),
        }}
      />

      {/* Location  */}
      <Tab.Screen
        name="profTransactionile"
        component={Transaction}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons
                name="playlist-add-circle"
                size={35}
                color="#1CAC78"
              />
            ) : (
              <MaterialIcons name="playlist-add" size={35} color="#1CAC78" />
            ),
        }}
      />

      {/* ocr */}
      <Tab.Screen
        name="ocr"
        component={Upload}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarItemStyle: {
            backgroundColor: "#1CAC78", // Background color of the tab bar
            borderRadius: 50, // Adjust tab bar height
            marginBottom: 10,
            marginTop: -30, // Padding at the bottom
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 6, height: 6 }, // Width and height of the shadow offset
            shadowOpacity: 0.83, // Opacity of the shadow
            shadowRadius: 6, // Radius of the shadow blur
            elevation: 6, // Elevation for Android shadow
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="control-camera" size={50} color="white" />
            ) : (
              <MaterialIcons name="control-camera" size={50} color="white" />
            ),
        }}
      />

      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="book" size={24} color="#1CAC78" />
            ) : (
              <Feather name="book" size={24} color="#1CAC78" />
            ),
        }}
      />

      {/* contact */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person-sharp" size={24} color="#1CAC78" />
            ) : (
              <View
                style={{
                  width: 100, // Set this to the desired width
                  padding: 10,
                  justifyContent: "center", // Center the icon horizontally
                  alignItems: "center", // Center the icon vertically
                }}
              >
                <Ionicons name="person-outline" size={24} color="#1CAC78" />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="camera"
          component={Camera}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
