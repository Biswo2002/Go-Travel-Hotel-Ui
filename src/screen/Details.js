import { ImageBackground, StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Octicons from 'react-native-vector-icons/Octicons'
const Details = () => {
  const route = useRoute();
  console.log(route);
  return (
    <SafeAreaView style={styles.Main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={route.params.HOTEL.image}
          style={styles.MainImage} imageStyle={{ borderRadius: 15 }} >

          <View style={styles.MainIconCont}>
            <View style={styles.LeftIcon}>
              <Fontisto name='angle-left' size={30} color={'#00C0CD'} />
            </View>
            <View style={styles.heartIcon}>
              <Octicons name='heart' size={30} color={'#fff'} />
            </View>
          </View>
          <View style={styles.PriceContainer}>
            <Text style={styles.FirstPrice}>&#xFF04; 99</Text>
            <Text style={styles.SecondPrice}>/person</Text>
          </View>
        </ImageBackground>

        <View style={styles.MainText}>
          <Text style={styles.Valley}>{route.params.HOTEL.Title}</Text>
          <View style={styles.Location}>
            {route.params.HOTEL.Icon}
            <Text style={styles.City}>{route.params.HOTEL.Name},</Text>
            <Text style={styles.Asia}>{route.params.HOTEL.country}</Text>
          </View>
        </View>
        <View style={styles.MainDetailsContainer}>
          <View style={styles.DetailsContainer}>
            <View style={styles.StarIcon}>
              {route.params.HOTEL.Star}
            </View>
            <View style={styles.IconContainer}>
              <Text style={styles.RateContainer}>{route.params.HOTEL.rate}</Text>
              <Text>{route.params.HOTEL.Rate}</Text>
            </View>
          </View>
          <View style={styles.DetailsContainer}>
            <View style={styles.WheatherIcon}>
              {route.params.HOTEL.Wheather}
            </View>
            <View style={styles.IconContainer}>
              <Text style={styles.RateContainer}>{route.params.HOTEL.Temp}</Text>
              <Text>{route.params.HOTEL.Temprature}</Text>
            </View>
          </View>
          <View style={styles.DetailsContainer}>
            <View style={styles.KflagIcon}>
              {route.params.HOTEL.Kflag}
            </View>
            <View style={styles.IconContainer}>
              <Text style={styles.RateContainer}>{route.params.HOTEL.KM}</Text>
              <Text style={styles.ButtomText}>{route.params.HOTEL.Dir}</Text>
            </View>
          </View>
        </View>
        <View style={styles.ButtomContainer}>
          <TouchableOpacity style={styles.Know}>
            <Text style={styles.KnowDetails}>{route.params.HOTEL.Bottom}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Review}>
            <Text style={styles.Reviews}>{route.params.HOTEL.Review}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PassageContainer}>
          <Text style={styles.TextContainer}>{route.params.HOTEL.Text}</Text>
        </View>
        <TouchableOpacity style={styles.Buttom}>
          <Text style={styles.Book}>Book Now</Text>
          <AntDesign name='arrowright' size={30} color={'#fff'} style={styles.ArrowIcon}/>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#Ffff',
    flex: 1,
  },
  HeadBG: {
    backgroundColor: '#ffff',
    height: 365,
  },
  MainImage: {
    width: 380,
    height: 350,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  MainIconCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  LeftIcon: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 15,
  },
  heartIcon: {
    backgroundColor: '#00C0CD',
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 15
  },
  PriceContainer: {
    flexDirection: 'row',
    marginTop: 210,
    marginLeft: 20,
  },
  FirstPrice: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  SecondPrice: {
    color: '#ffff',
    paddingTop: 7,
    fontSize: 20,
    fontWeight: 'bold',
  },
  Location: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  MainText: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  Valley: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#056067',
  },
  City: {
    fontSize: 17,
    fontWeight: '500',
    paddingLeft: 8,
  },
  Asia: {
    fontSize: 17,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  MainDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 30,
  },
  DetailsContainer: {
    flexDirection: 'row',
  },
  StarIcon: {
    backgroundColor: '#EBF8FF',
    width: 45,
    height: 45,
    padding: 10,
    borderRadius:12
  },
  WheatherIcon: {
    width: 45,
    height: 45,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EBF8FF',
  },
  KflagIcon: {
    width: 45,
    height: 45,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EEF0FF',
  },
  IconContainer: {
    marginHorizontal: 10
  },
  RateContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F9196',
  },
  ButtomText: {
    fontSize: 15,
    fontWeight: '500',
  },
  ButtomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FAFAFA',
    height: 50,
    alignItems: 'center',
    marginHorizontal: 25,
    borderRadius: 30
  },
  Know: {
    backgroundColor: '#fff',
    width: 180,
    height: 40,
    alignItems: 'center',
    padding: 5,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F0F0F0'
  },
  KnowDetails: {
    fontSize: 21,
    fontWeight: '500',
    color: '#4F9196',
  },
  Reviews: {
    fontSize: 19,
    fontWeight: '500',
    marginRight: 20,
    color: 'gray'
  },
  PassageContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  TextContainer: {
    color: 'gray',
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '500'
  },
  Buttom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C0CD',
    marginHorizontal: 30,
    height: 65,
    marginBottom: 20,
    borderRadius: 20
  },
  Book:{
    fontSize:25,
    color:'#ffff',
    fontWeight:'500'
  },
  ArrowIcon:{
    paddingLeft:20,
    paddingTop:5
  },
})