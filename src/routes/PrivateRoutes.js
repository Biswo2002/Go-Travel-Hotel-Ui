import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '../screen/Details'
import Home from '../screen/Home'
import Welcome from '../screen/Welcome'


const Stack = createNativeStackNavigator()

const PrivateRoutes = () => {
  return (
   <Stack.Navigator initialRouteName='Welcome' >
    <Stack.Screen
    name="Welcome"
    component={Welcome}
    options={{headerShown:false}}
    />
    <Stack.Screen
    name="Home"
    component={Home}
    options={{headerShown:false}}
    />
    <Stack.Screen  name="Details" component={Details} options={{headerShown:true}} />
  
  </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})