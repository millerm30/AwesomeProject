import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const User = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Users = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <User name={"mike"}/>
      <User name={"john"}/>
      <User name={"paul"}/>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Users />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
