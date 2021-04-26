import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn() {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        navigation.replace("Home");
        console.log(authuser);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {/* <Text>I am a login Screen</Text> */}

      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
        }}
        style={{ width: 100, height: 100, margin: 20 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          onSubmitEditing={signIn}
        />
      </View>
      <Button buttonStyle={styles.button} onPress={signIn} title='Login' />
      <Button
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate("Register");
        }}
        type='outline'
        title='Register'
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 5,
  },
});
