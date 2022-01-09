import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();
import { GigsSeller, Keywords } from '../screens'

export default function AppGig() {
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }}>
            <Stack.Screen name="Gigs" component={GigsSeller} />
            <Stack.Screen name="Keywords" component={Keywords} />
        </Stack.Navigator>
    );
}