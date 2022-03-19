import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'

import HomePage from "../pages/home_page";
import DetailsPage from "../pages/details_page";

const Stack = createStackNavigator(); 

export default function HomeNavigator(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomePage' component={HomePage} />
            <Stack.Screen name='DetailsPage' component={DetailsPage} />
        </Stack.Navigator>
    )
}