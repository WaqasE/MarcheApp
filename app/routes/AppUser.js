import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


import { Marketplace, Search, Products, Profile } from '../screens/'
import Colors from '../config/Colors'
import AppInbox from './AppInbox';

export default function AppUser() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: Colors['primary'],
                tabBarInactiveTintColor: Colors['inActive'],
                headerShown: false,
                tabBarStyle: { height: 60 },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Marketplace') {
                        iconName = focused
                            ? 'store'
                            : 'store-outline';
                    }
                    else if (route.name === 'AppInbox') {
                        iconName = focused
                            ? 'email'
                            : 'email-outline';
                    }
                    else if (route.name === 'Search') {
                        iconName = focused
                            ? 'magnify'
                            : 'magnify';
                    }
                    else if (route.name === 'Products') {
                        iconName = focused
                            ? 'clipboard-list'
                            : 'clipboard-list-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'account'
                            : 'account-outline';
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
                },
            })}>
            <Tab.Screen name="Marketplace" component={Marketplace} />
            <Tab.Screen name="AppInbox" component={AppInbox} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}