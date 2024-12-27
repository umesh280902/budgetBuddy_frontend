import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useState } from "react";

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { TextInput } from "react-native";
import login from "../api/Login";
import saveToken from "../api/Token/SetToken";

const { height, width } = Dimensions.get("window");
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate("signup");
  };

  const handleLogin=async ()=>{
    const response=await login({email,password})
    if(response.ok){
      const data=await response.json()
      console.log("Login successful","Welcome back",data)
      await saveToken(data.token);
      navigation.navigate("Main")
    }else{
      const errorData=await response.json()
      console.log("Error some occurred")
      console.log(errorData)
    }
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 50,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#018749" }}>
          Login
        </Text>
      </View>
      <View style={{ height: "50%" }}>
        <View style={styles.lottie}>
          <LottieView
            style={{ flex: 1 }}
            source={require("../assets/Images/Login.json")}
            autoPlay
            loop
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          display: "flex",
          gap: 10,
        }}
      >
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Karan@gmail,com..."
          style={{
            backgroundColor: "#F0F8FF",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderWidth: 2,
            borderColor: "blue",
            borderRadius: 10,
            borderColor: "#F0F8FF",
          }}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={{
            backgroundColor: "#F0F8FF",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderWidth: 2,
            borderColor: "blue",
            borderRadius: 10,
            borderColor: "#F0F8FF",
          }}
        />
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={{
            display: "flex",
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#018749",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Don't have Account?</Text>
          <TouchableOpacity onPress={goto}>
            <Text style={{ color: "#018749" }}> SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  lottie: {
    width: width,
    height: width,
    marginBottom: -50,
  },
});
