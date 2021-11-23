import { FlatList, SafeAreaView, Text, View } from "react-native";
import React from "react";


const ABOUTDATA = [
    {
        title: 'Title One',
        content: 'Content for section One',
    },
    {
        title: 'Title Two',
        content: 'Content for section Two',
    },
    {
        title: 'Title Three',
        content: 'Content for section Three',
    },
    {
        title: 'Title Four',
        content: 'Content for section Four',
    },
];



function About() {
    return (
        <SafeAreaView>
            <Text>About Page</Text>
            <FlatList 
                data = {ABOUTDATA}
                renderItem = {({item}) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor = {item => item.id}
                ListEmptyComponent = {() => (
                    <Text>No data now...</Text>
                )}
            />
        </SafeAreaView>
    )
}

export default About;