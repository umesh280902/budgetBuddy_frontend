import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import getRecentTransaction from "../api/Transaction/RecentTransaction";
import { useState,useEffect } from "react";

const screenWidth = Dimensions.get("window").width;
const Home = () => {
  const data = [
    {
      name: "Transfer",
      amount: 30,
      color: "#3498db",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Salary",
      amount: 70,
      color: "#2ecc71",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const [transaction, setTransaction] = useState([]);

  // const lt = [
  //   {
  //     To: "Starbucks",
  //     Amount: "1000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Zudio",
  //     Amount: "2000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Nike",
  //     Amount: "5000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Zara",
  //     Amount: "2000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Starbucks",
  //     Amount: "1000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Zudio",
  //     Amount: "2000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Nike",
  //     Amount: "5000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Zara",
  //     Amount: "2000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  // ];
  useEffect(() => {
    const recentTransaction = async () => {
      const response = await getRecentTransaction();
      if (response.ok) {
        const data = await response.json();
        console.log("transaction data", data);
        setTransaction(data);
      } else {
        const errorData = await response.json();
        console.log("response failed");
        console.log(errorData);
      }
    };
    recentTransaction();
  }, []);

  return (
    <View style={styles.Screen}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Header and greeting */}
          <View style={styles.container}>
            <Text style={styles.greet}>Welcome!!</Text>
            <Text style={styles.name}>Riya J</Text>
          </View>

          {/* Horizontal ScrollView */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.chart}>
              <View style={styles.incomedetails}>
                <Text style={styles.cardTitle}>Income overview</Text>
                <Text style={styles.amount}>+₹3400</Text>
                <Text style={styles.percentage}>30% from transfer</Text>
                <Text style={styles.percentage}>70% from salary</Text>
              </View>

              <View>
                <PieChart
                  style={styles.graph}
                  data={data}
                  width={screenWidth - 73}
                  height={200}
                  chartConfig={{
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  }}
                  accessor={"amount"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  absolute
                />
              </View>
            </View>

            {/* Another chart for horizontal scrolling */}
            <View style={styles.chart}>
              <View style={styles.incomedetails}>
                <Text style={styles.cardTitle}>Income overview</Text>
                <Text style={styles.amount}>+ ₹3400</Text>
                <Text style={styles.percentage}>30% from transfer</Text>
                <Text style={styles.percentage}>70% from salary</Text>
              </View>

              <View>
                <PieChart
                  style={styles.graph}
                  data={data}
                  width={screenWidth - 90}
                  height={200}
                  chartConfig={{
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  }}
                  accessor={"amount"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  absolute
                />
              </View>
            </View>
          </ScrollView>

          {/* Recent Transactions Section */}
          <View style={{ flex: 10 }}>
            <Text style={styles.head}>Recent Transactions</Text>

            {/* Vertical ScrollView for transactions */}
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
            >
              {transaction.length == 0 ? (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                    marginTop: 15,
                    marginHorizontal: 20,
                    padding: 2,
                    paddingTop: 4,
                    borderRadius: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#FF5733",
                      fontFamily: "serif",
                    }}
                  >
                    No transactions to display
                  </Text>
                </View>
              ) : (
                transaction.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                        marginTop: 15,
                        marginHorizontal: 20,
                        padding: 2,
                        paddingTop: 4,
                        borderRadius: 2,
                      }}
                    >
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        <View
                          style={{
                            backgroundColor: "#FDF4E1",
                            padding: 7,
                            borderRadius: 3,
                            marginRight: 10,
                          }}
                        >
                          <MaterialIcons
                            name="trending-down"
                            size={30}
                            color="#E77A26"
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "#3F3844",
                              fontFamily: "serif",
                            }}
                          >
                            {item.To}
                          </Text>
                          <Text
                            style={{ color: "#848884", fontFamily: "serif" }}
                          >
                            {item.Date}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#FF5733",
                            fontFamily: "serif",
                          }}
                        >
                          -₹{item.Amount}
                        </Text>
                      </View>
                    </View>
                  );
                })
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: "#018749",
    width: "100%",
    borderRadius: 20,
    borderTopEndRadius: 0,
    borderTopLeftRadius: 0,
    position: "absolute",
  },
  greet: {
    paddingTop: 10,
    marginLeft: "5%",
    marginTop: 40,
    marginBottom: -10,
    fontSize: 35, // Adjust font size as needed
    fontWeight: "bold", // Makes the text bold
    color: "white", // Sets the text color to white
    fontFamily: "serif",
  },
  name: {
    padding: 10,
    marginTop: "2%",
    marginLeft: "3%",
    marginTop: 0,
    fontSize: 20, // Adjust font size as needed
    fontWeight: "normal", // Makes the text bold
    color: "white", // Sets the text color to white
    fontFamily: "serif",
  },
  chart: {
    marginTop: 10,
    width: screenWidth - 20,
    height: 200,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 2, height: 1 }, // Horizontal and vertical offset
    shadowOpacity: 1, // Opacity of the shadow
    shadowRadius: 5, // Radius of the shadow blur (adjusted for visual similarity)
    elevation: 5, // Elevation for Android shadow
    marginTop: "25%",
    flex: 1,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "serif",
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F25D07", // Orange color for amount
    marginBottom: 10,
    marginLeft: 20,
  },
  percentage: {
    fontSize: 14,
    color: "#999",
    marginLeft: 20,
    fontFamily: "serif",
  },

  incomedetails: {
    flex: 0, // Take up the available space on the left
    paddingRight: 20,
  },
  Screen: {
    backgroundColor: "white",
    flex: 1,
  },
  head: {
    fontSize: 20,
    marginLeft: "2%",
    fontWeight: "bold",
    fontFamily: "serif",
    paddingTop: "0",
  },
  curve: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 250,
  },
});
