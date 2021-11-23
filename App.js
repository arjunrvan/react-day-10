// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import Login from './src/containers/login';
import Register from './src/containers/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/containers/home';
import Details from './src/containers/details';
import About from './src/containers/about';
import Contact from './src/containers/contact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { store, persistor } from './src/store/configureStore';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home-sharp' : 'md-home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'md-people-sharp' : 'md-people-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'md-mail-sharp' : 'md-mail-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTitle:'Movie Home',
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={About}  
          options={{
            headerTitle: 'About Us',
          }}
        />
        <Tab.Screen 
          name="Contact" 
          component={Contact} 
          options={{
            headerTitle: 'Contact Us',
          }}
        />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store = {store} persistor = {persistor}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{
            headerStyle: {
              backgroundColor: 'pink',
            },
          }}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="TabNav" component={TabNav} options={{headerShown:false}}/>
          <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
