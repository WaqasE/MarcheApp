import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function AppButton({ name, onPress, size, color, style }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{ style }}>
                <MaterialCommunityIcons size={size} color={color} name={name} />
            </View>
        </TouchableWithoutFeedback>
    );
}
