import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
 // Import the signup function

const { height, width } = Dimensions.get("window");

const Signup = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSignup = () => {
    // const response = await signup(form);
    // if (response) {
      // console.log("Signup successful", response);
      navigation.navigate("otp",{form});
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: 50,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold", color: "#018749" }}>
                Signup
              </Text>
            </View>
            <View style={{ height: "35%" }}>
              <View style={styles.lottie}>
                <LottieView
                  style={{ flex: 1 }}
                  source={require("../assets/Images/Signup.json")}
                  autoPlay
                  loop
                />
              </View>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                placeholder="First Name"
                style={styles.input}
                value={form.firstName}
                onChangeText={(text) => handleChange("firstName", text)}
              />
              <TextInput
                placeholder="Last Name"
                style={styles.input}
                value={form.lastName}
                onChangeText={(text) => handleChange("lastName", text)}
              />
              <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                value={form.email}
                onChangeText={(text) => handleChange("email", text)}
              />
              <TextInput
                placeholder="Phone Number"
                style={styles.input}
                keyboardType="phone-pad"
                value={form.phoneNumber}
                onChangeText={(text) => handleChange("phoneNumber", text)}
              />
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                value={form.password}
                onChangeText={(text) => handleChange("password", text)}
              />
              <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
                <Text style={styles.signupText}>Signup</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginRedirect}>
              <Text>Already have an Account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text style={{ color: "#018749" }}> Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  lottie: {
    width: width,
    height: width/1.5,
    marginBottom: -50,
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: "#F0F8FF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    marginBottom: 10,
  },
  signupButton: {
    display: "flex",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#018749",
  },
  signupText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  loginRedirect: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
