import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import * as styles from '../../assets/styles';



// const DATA = ["Data 1", "Data 2", "Data 3", "Data 4" ];

function Home(props) {

    const [movieData,setMovieData]=useState([{Title:'Hello'}]);


    useEffect(() => {
        try {
            axios.get("https://www.omdbapi.com/?apikey=85872d3a&s=Batman&page=1")
            .then(res => {
                console.log('res',res);
                setMovieData(res.data.Search);
        })
        .catch(error => console.log('Error',error))
        } catch (error) {
            console.log('Error',error);
        }
        
    },[]);

    function _renderListView(data) {
        return (
            <View style={styles.CARD_STYLE}>
                <Text><b>{data.Title}</b></Text>
                <Text>Year: {data.Year}</Text>
                <TouchableOpacity style={styles.BUTTON_STYLE} onPress={()=> props.navigation.navigate('Details',{
                    ID: data.imdbID,
                })}>
                    <Text>Go to Details</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>Home Page</Text>
                {
                    movieData.map(list => 
                    _renderListView(list))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;