import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors'
import { width, height } from '../functions/Dimensions'

import AppText from './AppText'



export default function AppBid({ title, bidStatus, bidPrice, profilePicture, status = 'offline', name, }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {
                    profilePicture ?
                        <View style={styles.inboxImageWrap}>
                            <Image resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: profilePicture }} />
                            <View style={{ width: 11.5, borderColor: 'white', borderWidth: 1.5, height: 11.5, borderRadius: 6.25, backgroundColor: status === 'online' ? '#00FF00' : 'grey', position: 'absolute', right: -1, bottom: -1 }} />
                        </View> :
                        <View style={styles.inboxImageWrap}>
                            <MaterialCommunityIcons name="account" size={20} color={Colors['white']} />
                            <View style={{ width: 11.5, borderColor: 'white', borderWidth: 1.5, height: 11.5, borderRadius: 6.25, backgroundColor: status === 'online' ? '#00FF00' : 'grey', position: 'absolute', right: -1, bottom: -1 }} />
                        </View>
                }
                <View style={styles.row1}>
                    <AppText style={styles.title}>{name}</AppText>
                    <TouchableHighlight onPress={() => console.log('here')} underlayColor='rgba(0,0,0,0.1)' style={{ width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="chat" size={25} color={Colors['primary']} />
                    </TouchableHighlight>
                </View>
            </View>
            <AppText style={styles.gigTitle}>{title}</AppText>
            <View style={styles.row}>
                <AppText style={{ fontSize: 22, color: Colors['black'], alignSelf: 'flex-start' }}>{bidPrice}</AppText>
                <AppText style={[styles.status, { backgroundColor: bidStatus === 'awaiting' ? '#FFFDA2' : bidStatus === 'approved' ? '#BAFFB4' : '#FFAFAF', }]}>{bidStatus}</AppText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width - 40,
        borderRadius: 10,
        backgroundColor: Colors['white'],
        padding: 20,
        marginBottom: 10
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    gigTitle: {
        fontSize: 13,
        color: Colors['inActive'],
        marginVertical: 5
    },
    status: {
        borderRadius: 5,
        backgroundColor: '#FFFDA2',
        padding: 5,
        fontSize: 12,
        color: Colors['black'],
        paddingHorizontal: 15,
        textTransform: 'capitalize'
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
    row1: {
        width: width - 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center'
    }
});