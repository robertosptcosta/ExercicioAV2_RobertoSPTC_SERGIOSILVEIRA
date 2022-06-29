import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text,setText]= useState('Bem Vindo teste');
  return (
    <View style={styles.container}>
      <Text>Teste Helloword Roberto SP Toscano Costa</Text>
      <TextInput style={styles.input}
        onChangeText={(value)=>console.log(value)}
      ></TextInput>
       <TextInput style={styles.input}
        onChangeText={setText}
      ></TextInput>
      <StatusBar style="auto" />
      <Text>
        digitantdo .... {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height:120,
    width:180,
    borderBottomWidth:4
  },
});
