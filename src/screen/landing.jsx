import React from "react";
import { Formik } from "formik";
import FlatBut from "./flatButton";
import * as yup from "yup";
import Icon from "../../assets/icon.png";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../partials/button";

export default function Form({ navigation }) {
  return (
    <View style={{ flex: 1, backgroungColor: "white", paddingTop: "14%" }}>
      <View style={styles.landingImage}>
        <Ionicons name="checkmark-circle-sharp" size={150} color="lightgrey" />
        <Text
          style={{
            fontSize: 50,
            color: "lightgrey",
          }}
        >
          Voteer
        </Text>
        <Text style={{ fontSize: 30, color: "grey", paddingTop: "20%" }}>
          Let get started{" "}
        </Text>
        <Text
          style={{
            fontSize: 19,
            color: "lightgrey",
            paddingHorizontal: "4%",
            marginBottom: "4.9%",
            textAlign: "center",
          }}
        >
          Get started by creating an account or login to an already existing
          account
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
      <TouchableOpacity>
        <CustomButton
          button_name="SIGN UP"
          onPress={() => {
            navigation.push("Register");
          }}
          style={{
            fontSize: 17,
            color: "white",
            backgroundColor: "#6C63FF",
            minWidth: "80%",
            borderRadius: 5,
            paddingVertical: "4%",
            textAlign: "center",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        />
      </TouchableOpacity>
        <TouchableOpacity>
          <CustomButton
            button_name="LOGIN"
            onPress={() => {
              navigation.push("Login");
            }}
            style={{
              fontSize: 17,
              color: "white",
              backgroundColor: "lightgrey",
              minWidth: "80%",
              borderRadius: 5,
              paddingVertical: "4%",
              textAlign: "center",
              marginTop: "5 %",
              marginBottom: "5%",
            }}
          />
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landingImage: {
    //   padding:320,
    alignItems: "center",
  },
});
