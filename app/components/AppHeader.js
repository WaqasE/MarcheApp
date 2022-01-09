import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from './AppText';
import { width, height } from '../functions/Dimensions'
import Colors from '../config/Colors'

export default function AppHeader({ children, title, name }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <MaterialCommunityIcons style={{ marginRight: 15 }} name={name} size={25} color={Colors['primary']} />
                <AppText style={{ fontSize: 18 }}>{title}</AppText>
            </View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75,
        backgroundColor: Colors['bg'],
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'flex-end',
        flexDirection: 'row',
        elevation: 5,
        paddingBottom: 10
    }
});