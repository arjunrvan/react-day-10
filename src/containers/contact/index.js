import { Button, SafeAreaView, Text } from "react-native";
import React from "react";
import { increase, decrease } from "../../actions";

import {useDispatch, useSelector} from 'react-redux';

function Contact() {
    const count = useSelector(state => state.count); //mapStatetoProps
    const dispatch = useDispatch(); // mapDispatchtoProps
    return (
        <SafeAreaView>
            <Text>Contact Page</Text>

            <Text style={{textAlign:'center'}}>Count: {count}</Text>
            <Button 
                title = 'Increase'
                onPress = {() => dispatch(increase())}
            />
            <Button 
                title = 'Decrease'
                onPress = {() => dispatch(decrease())}
            />
        </SafeAreaView>
    )
}

export default Contact;