import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.core}
        source={require('./assets/Lottie/core.json')}
        autoPlay
      ></LottieView>
      <Text style={styles.texto}>Eu estou com saudades de você Giovanna</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  core: {
    height: 300,
    width: 300
  },
  texto: {
    color: '#000'
  }
})
