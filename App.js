import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity } from "react-native"
import Constants from "expo-constants"
import { FontAwesome } from "@expo/vector-icons"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hitext}>Xin Chào!</Text>
          <Text style={styles.textuser}>PHAM VAN PHUC</Text>
          <Text style={styles.textuser}>0705999809</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Nhập Mật Khẩu"
            textAlign="center"
            maxLength={6}
          ></TextInput>
          <FontAwesome name="lock" size={24} color="black" style={styles.lockIcon} />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.buttonActionText}>QUÊN MẬT KHẨU</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.buttonActionText}>THOÁT TÀI KHOẢN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const TEXT = {
  color: "#fff",
  textAlign: "center",
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b0006d",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  hitext: {
    ...TEXT,
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  textuser: {
    ...TEXT,
    fontSize: 20,
    paddingTop: 10,
  },
  textWrapper: {
    marginBottom: 30,
    paddingTop: 70,
  },
  inputPassword: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "white",
    width: 300,
    fontSize: 20,
  },
  loginButton: {
    marginTop: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#8c0057",
    width: 300,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  buttonActionText: {
    ...TEXT,
  },
  lockIcon: {
    position: "absolute",
    top: 15,
    left: 70,
    color: "#3333",
    fontSize: 25,
  },
})
