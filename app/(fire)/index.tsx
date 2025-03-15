import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native'

// import bg from './bg.jpg' 


const App = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
       <Image source={require('@/assets/images/bg.jpg')} style={{ alignSelf: 'center', objectFit :'cover'}} />
      <Text style={styles.text}>React Native</Text>

       <Pressable onPress={() => {
         console.log('Hello button pressed')
         // Navigate to explore programmatically
         navigation.navigate('todo')
       }}>
        <Text style={styles.linktext}>Hello</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container :{
    flex : 1,
    flexDirection : 'column',
    backgroundColor :'black',
  alignItems : 'center',

  },
  text : {
    color : 'white' ,
    fontWeight :'900' ,
fontSize : 50,
marginBottom :100 ,
marginTop :100
  },
  linktext : {
color : 'white',
cursor : 'pointer', 
borderColor : 'white',
borderWidth : 1,
backgroundColor : 'red',
fontWeight :900, 
fontSize : 30,
paddingHorizontal : 30,
paddingVertical :10,
borderRadius : 25,
  }
})

export default App