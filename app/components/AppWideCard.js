import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../config/Colors';

export default function AppWideCard() {
    return (
        <View style={styles.container}></View>
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