import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();
import { Keywords, Login, ProfilePicture, Signup, Welcome } from '../screens/'

export default function AppAuth() {
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Keywords" component={Keywords} />
            <Stack.Screen name="ProfilePicture" component={ProfilePicture} />
        </Stack.Navigator>
    );
}