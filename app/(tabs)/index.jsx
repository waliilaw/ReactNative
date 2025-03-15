import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import bg from './bg.jpg' 

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={}>
      <Text style={styles.text}>Coffe Shop</Text>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container :{
    flex : 1,
    flexDirection : 'column',
  },
  text : {
    color : 'white' ,
    font : 'bold' ,


  }
})

export default App