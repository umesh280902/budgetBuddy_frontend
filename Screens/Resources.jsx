import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
const Resources = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#018749", flex: 1 }}>
      <View>
        <Text style={styles.h1}>Welcome to,</Text>
        <Text style={styles.h2}>Budget Resources</Text>
      </View>
      <ScrollView>
        <View style={styles.section2}>
          <Text
            style={{
              fontSize: 25, // Adjust font size as needed
              fontWeight: "bold",
              color: "#018749",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Courses for you
          </Text>
          <ScrollView horizontal={true}>
            <View style={styles.rowdiv}>
              <LinearGradient
                colors={["#bb0160", "#52026f"]}
                style={styles.section21}
              >
                <Text style={styles.metadata}>Monthly saving strategy</Text>
                <Image
                  source={require("../assets/Images/Revenue.gif")}
                  style={{ width: 200, height: 180 }}
                />
              </LinearGradient>
              <LinearGradient
                colors={["#124ac4", "#013292"]}
                style={styles.section21}
              >
                <Text style={styles.metadata}>Business strategy</Text>
                <Image
                  source={require("../assets/Images/Analysis.gif")}
                  style={{ width: 200, height: 220 }}
                />
              </LinearGradient>
              <LinearGradient
                colors={["#f9d48a", "#f3b43c"]}
                style={styles.section21}
              >
                <Text style={styles.metadata}>Business strategy</Text>
                <Image
                  source={require("../assets/Images/Analysis.gif")}
                  style={{ width: 200, height: 180 }}
                />
              </LinearGradient>
              <LinearGradient
                colors={["#f2808d", "#e83454"]}
                style={styles.section21}
              >
                <Text style={styles.metadata}>Business strategy</Text>
                <Image
                  source={require("../assets/Images/Analysis.gif")}
                  style={{ width: 200, height: 180 }}
                />
              </LinearGradient>
            </View>
          </ScrollView>
          <Text
            style={{
              fontSize: 25, // Adjust font size as needed
              fontWeight: "bold",
              color: "#018749",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Courses by Category
          </Text>
          <View style={styles.iconContainer}>
            {/* Budget */}
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="account-balance-wallet" size={40} color="#335fa5" />
              <Text style={[styles.iconLabel, { color: "#335fa5" }]}>
                Budget
              </Text>
            </TouchableOpacity>

            {/* Investment */}
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="trending-up" size={40} color="#ec7c34" />
              <Text style={[styles.iconLabel, { color: "#ec7c34" }]}>
                Investment
              </Text>
            </TouchableOpacity>

            {/* Insurance */}
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="security" size={40} color="#0c2c44" />
              <Text style={[styles.iconLabel, { color: "#0c2c44" }]}>
                Insurance
              </Text>
            </TouchableOpacity>

            {/* Taxes */}
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="attach-money" size={40} color="#e91a10" />
              <Text style={[styles.iconLabel, { color: "#e91a10" }]}>
                Taxes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Resources;

const styles = StyleSheet.create({
  h1: {
    paddingTop: 10,
    marginLeft: "5%",
    marginTop: 40,
    marginBottom: -10,
    fontSize: 35, // Adjust font size as needed
    fontWeight: "light", // Makes the text bold
    color: "#ffffff", // Sets the text color to white
    fontFamily: "serif",
  },
  h2: {
    color: "#ffffff",
    marginLeft: "5%",
    marginTop: 5,
    marginBottom: -10,
    fontSize: 35, // Adjust font size as needed
    fontWeight: "bold", // Makes the text bold

    fontFamily: "serif",
  },
  h3: {
    marginLeft: "5%",
    marginTop: 5,
  },
  section2: {
    borderWidth: 1,

    backgroundColor: "#fefefe",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 60,
    borderColor: "#e6eeee",
  },
  section21: {
    borderWidth: 1,
    height: 280,
    backgroundColor: "#fefefe",
    width: 200,
    borderRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 20,
    marginLeft: 20,
    borderColor: "#e6eeee",
  },
  rowdiv: {
    flexDirection: "row", // Places the child views in a row
    justifyContent: "space-between", // Adds space between the views (optional)
  },
  metadata: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fdfdfd",
    padding: 20,
  },
  lottieStyle: {
    width: "100%", // Set width and height of the Lottie animation
    height: "100%",
  },
  iconContainer: {
    flexDirection: "row", // To place icons side by side
    justifyContent: "space-around",
    padding: 20,
  },
  iconButton: {
    alignItems: "center",
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 14,
    color: "#018749",
  },
});
