import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import * as styles from '../../assets/styles';
import { useDispatch, useSelector } from "react-redux";
import { movieSearch } from "../../actions";

function Home(props) {

    const [search,setSearch]=useState('');

    const dispatch = useDispatch();
    const movieData  =  useSelector(state => state.movie);


    useEffect(() => {
        dispatch(movieSearch('Batman'));       
        
    },[]);

    function _renderListView(data) {
        console.log('data', data);
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
                <TextInput 
                    onChangeText = {(term) => setSearch(term)}
                    placeholder = 'Search Movies'
                />
                <TouchableOpacity style={styles.BUTTON_STYLE} onPress={() => dispatch(movieSearch(search))}>
                    <Text>Enter</Text>
                </TouchableOpacity>
                {console.log('movieData', movieData)}
                <FlatList
                    data={movieData}
                    renderItem = {({item}) => _renderListView(item)}
                    ListEmptyComponent = {() => (
                        <Text>No data now...</Text>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;