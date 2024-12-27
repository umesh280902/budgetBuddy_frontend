import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { React, useEffect, useState } from "react";

import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getAllTransactions from "../api/Transaction/AllTransactions";
import createTransaction from "../api/Transaction/PostTransaction";
const Transaction = () => {
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");
  const [category, setCategory] = useState("");
  const [transaction, setTransaction] = useState([]);
  // const lt = [
  //   {
  //     To: "Starbucks",
  //     Amount: "1000",
  //     Category: "food",
  //     Date: "19-09-2024",
  //   },
  //   {
  //     To: "Zudio",S
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

  const handleSubmit = () => {
    //onSubmit({ amount, to, category });
    console.log(amount, to, category);
    setAmount("");
    setTo("");
    setCategory("");
    onClose();
    postTransaction();
  };

  const [isVisible, setIsVisible] = useState(false);
  const handleOpenModal = () => setIsVisible(true);
  const onClose = () => setIsVisible(false);

  const postTransaction = async () => {
    const response = await createTransaction({ amount, to, category });
    // Check if the response is ok (status code 200-299)
    if (response.ok) {
      const data = await response.json();
      console.log("transaction created", data);
    } else {
      const errorData = await response.json(); // Parse error response
      console.log("response failed");
      console.log(errorData);
    }
  };

  useEffect(() => {
    const getTransaction = async () => {
      const response = await getAllTransactions();
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

    getTransaction();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* Header */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: "serif", fontWeight: "bold" }}>
          Statistics
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1CAC78",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "serif",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Add
            </Text>
            <Ionicons name="add-sharp" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <Modal
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Enter Details</Text>

              <TextInput
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                style={styles.input}
                keyboardType="numeric"
              />

              <TextInput
                placeholder="To"
                value={to}
                onChangeText={setTo}
                style={styles.input}
              />

              <TextInput
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
                style={styles.input}
              />

              <View style={styles.buttonContainer}>
                <Button title="Cancel" onPress={onClose} color="red" />
                <Button title="Submit" onPress={handleSubmit} color="green" />
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* Horizontal ScrollView */}
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text>This year</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* Content inside Horizontal Scroll */}
          <View
            style={{
              marginTop: 10,
              width: 300,
              height: 200,
              marginLeft: 10,
              borderRadius: 15,
              backgroundColor: "#FDF4E1",
            }}
          ></View>

          <View
            style={{
              marginTop: 10,
              width: 300,
              height: 200,
              marginLeft: 10,
              borderRadius: 15,
              backgroundColor: "#FDF4E1",
            }}
          >
            <Text>hi</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              width: 300,
              height: 200,
              marginLeft: 10,
              borderRadius: 15,
              backgroundColor: "#FDF4E1",
            }}
          ></View>
        </ScrollView>
      </View>

      {/* All Transactions Section */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: "8%",
            fontFamily: "serif",
            marginTop: 15,
          }}
        >
          All Transactions
        </Text>

        {/* Ensure this scrolls properly */}
        <ScrollView
          style={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {transaction.length === 0 ? (
            // Render an empty state message or placeholder
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#848884",
                  fontFamily: "serif",
                }}
              >
                No transactions to display
              </Text>
            </View>
          ) : (
            // Render the list of transactions
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
                      <Text style={{ color: "#848884", fontFamily: "serif" }}>
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
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
