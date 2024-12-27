import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";

export default function CameraScreen() {
  const [image, setImage] = useState(null);

  // Function to open the camera
  const openCamera = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permissions are required to use this feature.");
      return;
    }

    // Launch the camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Check if the user took a photo
    console.log(result);
    if (!result.cancelled) {
      setImage(result.assets[0].uri); // Save the image URI to display it
      console.log(" inside if : ", result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", {
      uri: image,
      name: "photo.jpg", // You can specify any file name here
      type: "image/jpeg", // Update type based on the file format
    });

    try {
      const response = await fetch("https://your-backend-url.com/upload", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Open Camera" onPress={openCamera} />
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      ) : (
        <Text style={{ marginTop: 20 }}>No image selected</Text>
      )}
    </View>
  );
}
