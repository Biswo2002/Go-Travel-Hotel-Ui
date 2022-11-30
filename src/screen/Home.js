import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
const Dreams = [
    {
        id: 'Valley_1',
        Title: 'Valley of Dream',
        image: require('../assets/image/V2.jpg'),
        Name: 'New Mexico',
        country: 'Asia',
        Icon: <Entypo name='location-pin' size={20} color={'#8397A2'} />,
        Star: <Entypo name='star' size={25} color={'#AC7262'} />,
        rate: '4.9',
        Rate: '3k rating',
        Wheather: <Entypo name='cloud' size={25} color={'#60C1F8'} />,
        Temp: '22* C',
        Temprature: 'Temprature',
        Kflag: <Entypo name='flag' size={25} color={'#555CEC'} />,
        KM: '8.2Km',
        Dir: 'Direction',
        Bottom:'Know Details',
        Review:'Reviews(85)',
        Text:'Visitors to Doha are spoilt for choice, with a plethora of options to explore the vibrant city s cultural sites, Visitors to Doha are spoilt for choice, with a plethora of options to explore the vibrant city s cultural sites, world-class restaurants, beachfront luxury hotels or the majesty of the desert..'
    },
    {
        id: 'Valley_2',
        Title: 'Valley of Dream',
        image: require('../assets/image/V1.jpg'),
        Name: 'New Mexico',
        Icon: <Entypo name='location-pin' size={20} color={'#8397A2'} />,
        country: 'Asia',
        Star: <Entypo name='star' size={25} color={'#AC7262'} />,
        rate: '5.0',
        Rate: '9m rating',
        Wheather: <Entypo name='cloud' size={25} color={'#60C1F8'} />,
        Temp: '24* C',
        Temprature: 'Temprature',
        Kflag: <Entypo name='flag' size={25} color={'#555CEC'} />,
        KM: '9.2',
        Dir: 'Direction',
        Bottom:'Know Details',
        Review:'Reviews',
        Text:'We arent just travellers and nomads. Were also travel content creatives. We have to have some skills to pay the hostel bills, right? Each of us are talented and passionate writers who have years of professional travel writing experience behind us.'
    },
    {
        id: 'Valley_3',
        Title: 'Valley of Dream',
        image: require('../assets/image/Valley3.png'),
        Name: 'New Mexico',
        Icon: <Entypo name='location-pin' size={20} color={'#8397A2'} />,
        country: 'Asia',
        Star: <Entypo name='star' size={25} color={'#AC7262'} />,
        rate: '4.5',
        Rate: '9k rating',
        Wheather: <Entypo name='cloud' size={25} color={'#60C1F8'} />,
        Temp: '20* C',
        Temprature: 'Temprature',
        Kflag: <Entypo name='flag' size={25} color={'#555CEC'} />,
        KM: '10.2',
        Dir: 'Direction',
        Bottom:'Know Details',
        Review:'Reviews',
        Text:'Many of us are experts on a myriad of destinations all across the globe. Not just because we ve backpacked through them and wandered through for a few nights, but because weve actually lived there ourselves. We have holed up teaching English in the Himalayas outside of Kathmandu, and have.'
    }
]
const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.Main}>
            <View style={styles.HeadContainer}>
                <View style={styles.Headertext}>
                    <Text style={styles.Discover}>Discover </Text>
                    <Text style={styles.BeautyText}>The Beauty today</Text>
                </View>
            </View>
            <View style={styles.SearchContainer}>
                <View style={styles.Search}>
                    <Ionicons name='md-search-outline' size={25} color={'gray'} />
                    <TextInput placeholder='Seach....' style={styles.TextInput} />
                </View>
                <View style={styles.Microphone} >
                    <FontAwesome name='microphone' size={20} color={'#00C0CD'} />
                </View>
            </View>
            <View style={{ backgroundColor: '#F9F9F9', height: 650 }}>
                <View style={styles.SecondContainer}>
                    <View style={styles.ImgVector}>
                        <Image source={require('../assets/image/H1.png')} style={styles.Image} />
                        <Text style={styles.TextSecond}>Hotel</Text>
                    </View>
                    <View style={styles.ImgVector}>
                        <Image source={require('../assets/image/E.png')} style={styles.Image} />
                        <Text style={styles.TextSecond}>Event</Text>
                    </View>
                    <View style={styles.ImgVector}>
                        <Image source={require('../assets/image/C2.png')} style={styles.Image} />
                        <Text style={styles.TextSecond}>Camp</Text>
                    </View>
                    <View style={styles.ImgVector1}>
                        <Image source={require('../assets/image/T.png')} style={styles.Image1} />
                        <Text style={styles.TextSecond}>Trips</Text>
                    </View>
                </View>


                <View style={styles.ThirdContainer}>
                    <Text style={styles.Trips}>Top Trips</Text>
                    <View style={styles.TopTrips}>
                        <Text style={styles.Explore}>Explore</Text>
                        <AntDesign name='arrowright' size={25} color='#90B9BD' />
                    </View>
                </View>

                {/* Apply Flatlist */}
                <View style={styles.Flatlist}>
                    <FlatList
                        data={Dreams}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.FourthContainer}>
                                <TouchableOpacity style={styles.ImageContainer}
                                    onPress={() => navigation.navigate('Details', { HOTEL: item })}
                                >
                                    <Image source={item?.image} style={styles.ValleyImg} />
                                    <Text style={styles.Valley}>{item?.Title}</Text>
                                    <View style={styles.NewMexico}>
                                        {item?.Icon}
                                        <Text style={styles.New}> {item?.Name} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    Main: {
        // backgroundColor:'#fff',
    },
    HeadContainer: {
        backgroundColor: '#FCFCFC',
    },
    Headertext: {
        marginHorizontal: 15,
        paddingVertical: 30,
    },
    Discover: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#025F67',
    },
    BeautyText: {
        fontSize: 27,
        color: '#406174',
    },
    Search: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    TextInput: {
        fontSize: 20,
        paddingLeft: 10,
    },
    SearchContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        height: 60,
        borderRadius: 20,
        borderColor: '#F1F1F1',
        backgroundColor: '#FFFFFF'
    },
    Microphone: {
        backgroundColor: '#FCFCFC',
        marginRight: 15,
        borderWidth: 1,
        width: 40,
        height: 42,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#F2F2F2',

    },
    SecondContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 40,
        marginHorizontal: 10,
        // backgroundColor: '#ffff',

    },
    ImgVector: {
        backgroundColor: '#ECECEC',
        width: 85,
        height: 85,
        borderRadius: 50,
        padding: 10,
    },
    ImgVector1: {
        backgroundColor: '#ECECEC',
        width: 85,
        height: 85,
        borderRadius: 50,
        padding: 5,
    },
    Image: {
        width: 65,
        height: 65,
    },
    Image1: {
        width: 80,
        height: 70,
    },
    TextSecond: {
        fontSize: 19,
        paddingVertical: 20,
        paddingHorizontal: 5,
        fontWeight: 'bold',
        color: '#4A8E92',
    },
    ThirdContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 40,
    },
    TopTrips: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Trips: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#156B72'
    },
    Explore: {
        fontSize: 20,
        color: '#82B1B5',
        marginRight: 10,
    },
    ValleyImg: {
        width: 180,
        height: 185,
        borderRadius: 20,

    },
    ImageContainer: {
        paddingTop: 10,
    },
    NewMexico: {
        flexDirection: 'row',
        marginHorizontal: 5
    },
    Flatlist: {
        marginHorizontal: 15
    },
    FourthContainer: {
        borderWidth: 3,
        borderColor: '#EFEFEF',
        width: 200,
        height: 290,
        alignItems: 'center',
        marginHorizontal: 5,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 0.44,
        // shadowRadius: 1.2,

        // elevation:0,
        backgroundColor: '#ffff',
    },
    Valley: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 15,
        marginHorizontal: 5,
        marginTop: 4,
        color: '#33797E'
    },
    New: {
        fontSize: 17,
        fontWeight: '500',
        paddingLeft: 5,
        marginHorizontal: 5,
        color: '#8397A2',
    },
})