import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import * as styles from '../../assets/styles';


function Register() {
    return (
        <SafeAreaView style={styles.CONTAINER_STYLE}>
            <Text>Register Now</Text>

            <TextInput placeholder="Username" style={styles.INPUT_STYLE}/>
            <TextInput placeholder="Password" style={styles.INPUT_STYLE}/>
            <TextInput placeholder="Email" style={styles.INPUT_STYLE}/>

            <TouchableOpacity style={styles.BUTTON_STYLE}>
                <Text>Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}



export default Register;