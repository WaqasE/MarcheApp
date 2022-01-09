import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Colors from '../config/Colors';

export default function AppMinimalCard() {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}></View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        backgroundColor: Colors['white'],
        borderRadius: 10
    }
});