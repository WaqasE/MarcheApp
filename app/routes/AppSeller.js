import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import { HomeSeller, BidsSeller, GigsSeller, ProfileSeller } from '../screens/'
import Colors from '../config/Colors';
import AppInbox from './AppInbox';
import AppGig from './AppGig'
import User from '../context/UserContext';

export default function AppSeller() {
    const { user } = useContext(User);

    const tabBarHandler = (route) => {
        if (getFocusedRouteNameFromRoute(route) === 'Chat' || route.name === 'GigsSeller') {
            return 'none'
        }
        else {
            return 'flex'
        }
    }
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarActiveTintColor: Colors['primary'],
            tabBarInactiveTintColor: Colors['inActive'],
            headerShown: false,
            tabBarStyle: { height: 60, display: tabBarHandler(route) },
            tabBarItemStyle: route.name === 'GigsSeller' ? { backgroundColor: Colors['primary'], borderRadius: 25, maxWidth: 50, height: 50, top: -20, padding: 0, elevation: 5 } : {},

            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeSeller') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                }
                else if (route.name === 'AppInbox') {
                    iconName = focused
                        ? 'email'
                        : 'email-outline';
                }
                else if (route.name === 'GigsSeller') {
                    iconName = focused
                        ? 'plus'
                        : 'plus';
                }
                else if (route.name === 'BidsSeller') {
                    iconName = focused
                        ? 'clipboard-list'
                        : 'clipboard-list-outline';
                }
                else if (route.name === 'ProfileSeller') {
                    iconName = focused
                        ? 'account'
                        : 'account-outline';
                }

                // You can return any component that you like here!
                return <MaterialCommunityIcons name={iconName} size={route.name === 'GigsSeller' ? 32 : 28} color={route.name === 'GigsSeller' ? Colors['white'] : color} />;
            },
        })}>
            <Tab.Screen name="HomeSeller" component={HomeSeller} />
            <Tab.Screen options={{ tabBarBadge: user.unreadMsgs, tabBarVisible: false }} name="AppInbox" component={AppInbox} />
            <Tab.Screen name="GigsSeller" component={AppGig} />
            <Tab.Screen options={{ tabBarBadge: user.newBids, tabBarVisible: false }} name="BidsSeller" component={BidsSeller} />
            <Tab.Screen name="ProfileSeller" component={ProfileSeller} />
        </Tab.Navigator>
    );
}