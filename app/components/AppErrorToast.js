import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';

import Colors from '../config/Colors';

import AppText from './AppText';

import { width, height } from '../functions/Dimensions.js'

export default function AppErrorToast({ error, onPress }) {
    return (
        <View style={styles.errorToast}>
            <AppText style={styles.errorToastTextHeading}>Error</AppText>
            <AppText style={styles.errorToastText}>{error}</AppText>
            <View style={{ width: width / 1.5, height: 0.5, backgroundColor: 'grey', marginTop: 20 }} />
            <TouchableOpacity style={styles.toastButton} onPress={onPress}>
                <AppText style={styles.errorToastTextHeading}>Try Again</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    errorToast: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light,
        paddingHorizontal: 20,
        borderRadius: 5,
        maxWidth: width / 1.5,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: 10,
    },
    errorToastTextHeading: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.dark,
        alignSelf: 'center',
        fontSize: 15
    },
    errorToastText: {
        fontSize: 13,
        color: 'grey',
        lineHeight: 20,
        marginBottom: 5,
        
    },
    toastButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.5 - 40,
        height: 30,
        marginTop: 10
    },
});