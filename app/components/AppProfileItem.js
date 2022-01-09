import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
import AppText from './AppText';

export default function AppProfileItem({ id, name, title }) {
    return (
        <TouchableHighlight style={styles.container} underlayColor='rgba(0,0,0,0.1)' onPress={() => console.log('here')}>
            <View style={styles.container}>
                <View style={styles.iconWrap}>
                    <MaterialCommunityIcons name={name} size={22} color={Colors['primary']} />
                </View>
                <AppText style={styles.title}>{title}</AppText>
            </View>
        </TouchableHighlight >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    iconWrap: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(18, 65, 188,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginLeft: 10
    }
});