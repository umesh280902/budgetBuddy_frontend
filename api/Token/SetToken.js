import AsyncStorage from "@react-native-async-storage/async-storage";
import {ASYNC_TOKEN} from '@env'
const tokenName=ASYNC_TOKEN

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem(tokenName, token);
    console.log("Token saved successfully.");
  } catch (error) {
    console.error("Error saving token:", error);
  }
};

export default saveToken;
