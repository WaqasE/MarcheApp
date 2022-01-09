import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
import { width, height } from '../functions/Dimensions'
import AppText from './AppText';


export default function AppInboxChat({ profilePicture, name, timeStamp, latestMsg, status, seen, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={[styles.container, { backgroundColor: seen ? 'transparent' : 'rgba(18, 65, 188,0.1)' }]}>
                {
                    profilePicture ?
                        <View style={styles.headerImageWrap}>
                            <View style={{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden' }}>
                                <Image resizeMode='contain' style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: profilePicture }} />
                            </View>
                            <View style={{ width: 11.5, borderColor: 'white', borderWidth: 1.5, height: 11.5, borderRadius: 6.25, backgroundColor: status === 'online' ? '#00FF00' : 'grey', position: 'absolute', right: -2, bottom: -2 }} />
                        </View> :
                        <View style={styles.inboxImageWrap}>
                            <MaterialCommunityIcons name="account" size={20} color={Colors['white']} />
                            <View style={{ width: 11.5, borderColor: 'white', borderWidth: 1.5, height: 11.5, borderRadius: 6.25, backgroundColor: status === 'online' ? '#00FF00' : 'grey', position: 'absolute', right: -1, bottom: -1 }} />
                        </View>
                }
                <View style={styles.wrapper}>
                    <View style={styles.row1}>
                        <AppText style={styles.title}>{name}</AppText>
                        <AppText style={styles.timeStamp}>{timeStamp}</AppText>
                    </View>
                    <AppText ellipsizeMode='tail' numberOfLines={2} style={[styles.msg, { color: seen ? Colors['inActive'] : Colors['black'] }]}>{latestMsg}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        paddingHorizontal: 20,
        // backgroundColor:'grey',
        alignItems: 'center',
    },
    inboxImageWrap: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
        position: 'relative',
    },
    wrapper: {
        width: width - 90,
    },
    row1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        paddingLeft: 10,
        maxWidth: '70%',
        color: Colors['black'],
        textTransform: 'capitalize'

    },
    timeStamp: {
        fontSize: 13,
        color: Colors['inActive']
    },
    msg: {
        fontSize: 13,
        color: Colors['inActive'],
        paddingLeft: 10,
        marginTop: 2
    }
});