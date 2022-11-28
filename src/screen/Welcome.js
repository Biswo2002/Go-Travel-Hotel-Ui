import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.Header}>
        <View style={styles.Go}>
          <Text style={styles.GoText}>Go</Text>
        </View>
        <Text style={styles.Travel}>Travel</Text>
      </View>
      <View style={styles.MainText}>
        <Text style={styles.Enjoy}>
          Enjoy the trip with
        </Text>
        <Text style={styles.Good}>Good Moments</Text>
      </View>
      <View style={styles.MText}>
        <Text style={styles.subText}>
          Your hotel content marketing could focus on social media, or even email. Distribution is totally up to you and what channels.
        </Text>
      </View>
      <View style={styles.ColorContainer}>
      </View>
      <View style={styles.ColorContainer2}></View>
      <ImageBackground source={require('../assets/image/BG3.png')} style={styles.IMgBackground}>
        <View style={styles.BtnShadow}>
          <TouchableOpacity style={styles.Buttom}>
            <Text style={styles.GoButtom}>GO</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  Main: {
  },
  Header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 25,
  },
  Go: {
    backgroundColor: '#000',
    borderRadius: 40,
    width: 50,
    height: 45,
    alignItems: 'center',
    padding: 3,
  },
  GoText: {
    color: '#00BDCA',
    fontSize: 25,
    fontWeight: '500'
  },
  Travel: {
    color: '#000',
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  MainText: {
    marginHorizontal: 25,
  },
  Enjoy: {
    fontSize: 35,
    color: '#000',

  },
  Good: {
    color: '#47D1DB',
    fontSize: 35,
    fontWeight: 'bold',
  },
  MText: {
    marginHorizontal: 25,
  },
  subText: {
    textAlign: 'justify',
    fontSize: 17,
    paddingVertical: 15,
    fontWeight: '600',
  },
  ColorContainer: {
    width: 200,
    height: 380,
    backgroundColor: '#00BAC7',
    borderBottomLeftRadius: 700,
    borderTopLeftRadius: 700,
    marginLeft: 220,
  },
  ColorContainer2: {
    width: 300,
    height: 270,
    backgroundColor: '#E99265',
    borderTopRightRadius: 200,
    marginTop: -100,
  },
  IMgBackground: {
    width: 450,
    height: 600,
    marginTop: -500,
  },
  Buttom: {
    // marginTop: 350,
    backgroundColor: '#00BAC7',
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius: 60,
    // marginHorizontal: 180,
    padding: 25,
    margin:10
  },
  BtnShadow: {
    borderWidth: 4,
    width: 120,
    height:120,
    marginTop: 320,
    marginHorizontal:170,
    borderRadius:60,
    borderColor:'#00BAC7'
  },
  GoButtom: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
})