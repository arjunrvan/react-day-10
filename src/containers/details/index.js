import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailsSearch } from "../../actions";
import * as styles from '../../assets/styles';

function Details(props) {
    const {ID} = props.route.params;

    const movieDetails = useSelector(state => state.movieDetails);
    const dispatch = useDispatch();
    dispatch(movieDetailsSearch(ID));

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style = {styles.CONTAINER_STYLE}>
                    <Image style={styles.IMAGE_STYLE} source = {{uri:movieDetails.Poster,}}/>
                    <Text><b>{movieDetails.Title}</b></Text><br/><br/>
                    <Text>Plot: {movieDetails.Plot}</Text><br/><br/>
                    <Text>Actors: {movieDetails.Actors}</Text><br/><br/>
                    <Text>Director: {movieDetails.Director}</Text><br/><br/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details;