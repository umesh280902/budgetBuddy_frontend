import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useState } from "react";
import categorySorted from "../api/CategorySorted";
const screenWidth = Dimensions.get("window").width;

const Profile = () => {
  
  const [pieChart,setPieChart]=useState([]);
  useEffect( ()=>{
    console.log("useeffect ke andar");
    const getPieChart=async ()=>{
      console.log("function ke  ke andar");
      const response=await categorySorted();
      if(response.ok){
        const res=await response.json()
        console.log(res)
        setPieChart(res)
      }else{
        const errorData=await response.json()
        console.log("Error occurred")
        console.log(errorData)
      }
    } 
    getPieChart();
  },[])

  

  const data = [
    {
      name: "Academics",
      amount: pieChart.academics||0,
      color: "#3498db",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Entertainment",
      amount: pieChart.entertainment||0,
      color: "#2ecc71",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Fashion",
      amount: pieChart.fashion||0,
      color: "#e74c3c",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Food",
      amount: pieChart.food||0,
      color: "#ecff33",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Travel",
      amount: pieChart.travel||0,
      color: "#33ffd4",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Others",
      amount: pieChart.others||0,
      color: "#33ff7a",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const goals = [
    { goal: "Save for Emergency Fund", progress: "60%", target: "₹50,000" },
    { goal: "Monthly Budget", progress: "75%", target: "₹30,000" },
    { goal: "Invest in Mutual Funds", progress: "40%", target: "₹1,00,000" },
  ];

  return (
    <View style={styles.Screen}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <View style={styles.header}>
            <Text style={styles.greet}>Hello, Riya J!</Text>
            <Text style={styles.tagline}>
              Take charge of your financial health
            </Text>
          </View>

          {/* Financial Goals Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Financial Goals</Text>
            {goals.map((item, index) => (
              <View key={index} style={styles.goalCard}>
                <Text style={styles.goalText}>{item.goal}</Text>
                <Text style={styles.progress}>Progress: {item.progress}</Text>
                <Text style={styles.target}>Target: {item.target}</Text>
              </View>
            ))}
          </View>

          {/* Budget Overview with PieChart */}
          <View style={styles.chartSection}>
            <Text style={styles.sectionTitle}>Budget Overview</Text>
            <PieChart
              style={styles.graph}
              data={data}
              width={screenWidth - 40}
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

          {/* Recent Transactions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            {[
              {
                To: "Starbucks",
                Amount: "300",
                Date: "21-10-2024",
                Category: "Dining",
              },
              {
                To: "Amazon",
                Amount: "1500",
                Date: "20-10-2024",
                Category: "Shopping",
              },
              {
                To: "Uber",
                Amount: "250",
                Date: "19-10-2024",
                Category: "Transport",
              },
            ].map((item, index) => (
              <View key={index} style={styles.transactionCard}>
                <View style={styles.transactionInfo}>
                  <MaterialIcons
                    name="trending-down"
                    size={30}
                    color="#E77A26"
                  />
                  <View>
                    <Text style={styles.transactionTo}>{item.To}</Text>
                    <Text style={styles.transactionDate}>{item.Date}</Text>
                  </View>
                </View>
                <Text style={styles.transactionAmount}>-₹{item.Amount}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    backgroundColor: "#018749",
    padding: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "right",
    paddingLeft: 20,
  },
  greet: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "serif",
  },
  tagline: {
    color: "#d3d3d3",
    fontSize: 16,
    marginTop: 5,
    fontFamily: "serif",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    fontFamily: "serif",
    alignItems: "right",
  },
  goalCard: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  goalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "serif",
  },
  progress: {
    color: "#777",
    fontSize: 14,
    fontFamily: "serif",
  },
  target: {
    color: "#555",
    fontSize: 14,
    fontFamily: "serif",
  },
  chartSection: {
    alignItems: "right",
    paddingVertical: 20,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },
  graph: {
    marginVertical: 8,
  },
  transactionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionTo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3F3844",
    fontFamily: "serif",
  },
  transactionDate: {
    color: "#848884",
    fontFamily: "serif",
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF5733",
    fontFamily: "serif",
  },
});
