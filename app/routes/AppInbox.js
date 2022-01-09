import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';



const Stack = createStackNavigator();
import { Inbox, Chat } from '../screens/'

export default function AppAuth() {
    return (
        <Stack.Navigator initialRouteName="Inbox" screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}>
            <Stack.Screen name="Inbox" component={Inbox} />
            <Stack.Screen name="Chat" component={Chat} />

        </Stack.Navigator>
    );
}