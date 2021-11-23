import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image } from "react-native";
import * as styles from '../../assets/styles';

function Login(props) {
    return (
        <SafeAreaView style={styles.CONTAINER_STYLE}>
            <Image source={require("../../assets/logo.png")} style={{width:40, height:40}}/>
            <Text>This is Login</Text>
            <TextInput placeholder="Username" keyboardType="default" style={styles.INPUT_STYLE}/>
            <TextInput placeholder="Password" keyboardType="default" secureTextEntry={true} style={styles.INPUT_STYLE}/>

            <TouchableOpacity style={styles.BUTTON_STYLE} onPress={()=> props.navigation.navigate('TabNav')}>
                <Text>Login Here</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BUTTON_STYLE} onPress={()=> props.navigation.navigate('Register')}>
                <Text>Go to Register</Text>
            </TouchableOpacity>

            
        </SafeAreaView>
    )
}

export default Login;