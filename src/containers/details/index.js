import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import * as styles from '../../assets/styles';

function Details(props) {
    const {ID} = props.route.params;
    const [movieData,setMovieData] = useState({Title:'Hello'}); 

    useEffect(() => {
        try {
            axios.get(`https://www.omdbapi.com/?apikey=85872d3a&i=${ID}`)
            .then(res => {
                console.log('res',res);
                setMovieData(res.data);
                
        })
        .catch(error => console.log('Error',error))
        } catch (error) {
            console.log('Error',error);
        }
        console.log('movieData',movieData);
    },{});

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} >
    
                <View style = {styles.CONTAINER_STYLE}>
                    <Image style={styles.IMAGE_STYLE} source = {{uri:movieData.Poster,}}/>
                    <Text><b>{movieData.Title}</b></Text><br/><br/>
                    <Text>Plot: {movieData.Plot}</Text><br/><br/>
                    <Text>Actors: {movieData.Actors}</Text><br/><br/>
                    <Text>Director: {movieData.Director}</Text><br/><br/>
                </View>
                    
                    
                
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details;