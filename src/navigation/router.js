import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Text } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../styles/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import HomePage from "../pages/home_page";
import DetailsPage from "../pages/details_page";
import AboutPage from "../pages/about_page";
import ContactUs from '../pages/contact_us';
import { Header } from 'react-native/Libraries/NewAppScreen';
import HomeNavigator from './home_navigator';
import CardsPage from '../pages/cards_page';

const icons = {
    HomePage: {
        name: 'home'
    },
    ContactUs: {
        name: 'mail'
    },
    Sobre: {
        name: 'bold'
    },
    Cartoes: {
        name: 'credit-card'
    }
};

function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size, focused }) => {
                        let bullet;
                        const { name } = icons[route.name];
                        focused ? bullet = '●' : null
                        return <View style={{ alignItems: 'center' }}>
                            <Icon name={name} color={color} size={size} />
                            <Text style={{ color: colors.accent }}>{bullet} </Text>
                        </View>
                    },
                    tabBarActiveTintColor: colors.accent,
                    headerShown: false,
                    tabBarShowLabel: false,

                    tabBarItemStyle: {
                        "height": 58
                    },
                    tabBarStyle: {
                        height: 53,
                        backgroundColor: '#fff',
                    },


                })}
            >
                <Tab.Screen
                    name="HomePage"
                    component={HomeNavigator}
                />
                <Tab.Screen
                    name="Sobre"
                    component={AboutPage}
                />
                <Tab.Screen
                    name="ContactUs"
                    component={ContactUs}
                />
                <Tab.Screen
                    name="Cartoes"
                    component={CardsPage}
                />
            </Tab.Navigator>
        </NavigationContainer >
    )
}

export default Routes;