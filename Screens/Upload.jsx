import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Upload = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const openGallery = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status == "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      setImage(result.assets[0]);
      console.log("printing image");
      console.log(image);
      //   if(image){
      //     try{
      //       const formdata=new FormData();
      //       formdata.append('img', {
      //         uri: image.uri,
      //         name: 'image.jpg', // Change the filename if needed
      //         type: image.mimeType, // Change the type according to the image format
      //       });
      //       console.log("formdata here")
      //       console.log(formdata)
      //       let res= await fetch("http://192.168.0.104:4000/upload",{
      //       method:"POST",
      //       body: formdata,
      //       headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'multipart/form-data',
      //       },
      //       })
      //       console.log("after fetch...")
      //       const data=await res.json();
      //       console.log(data)
      //       setImage(null)
      //       navigation.navigate("display",{"disease":data.disease})
      //     }catch(err){
      //         console.log(err)
      //     }
      //   }else{
      //     console.log("no inside imagee")
      //   }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        gap: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={openGallery}
        style={{
          display: "flex",
          paddingHorizontal: 40,
        }}
      >
        <View style={styles.lottie}>
          <LottieView
            style={{ flex: 1 }}
            source={require("../assets/Images/upload.json")}
            autoPlay
            loop
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            color: "#1CAC78",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Upload Photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("camera")}
        style={{
          display: "flex",
          paddingHorizontal: 40,
        }}
      >
        <View style={styles.lottie}>
          <LottieView
            style={{ flex: 1 }}
            source={require("../assets/Images/takePhoto.json")}
            autoPlay
            loop
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            color: "#1CAC78",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Take photo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250,
  },
});
