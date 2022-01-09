import React from 'react';
import { StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import { width, height } from '../functions/Dimensions'
import Colors from '../config/Colors'

export default function AppChatHeader({ title, navigation, profilePicture, name, status }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <TouchableHighlight underlayColor='rgba(18, 65, 188,0.1)' style={styles.backButton} onPress={() => navigation.goBack()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={25} color='rgba(0,0,0,0.8)' />
                        {
                            profilePicture ?
                                <View style={styles.headerImageWrap}>
                                    <Image resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: profilePicture }} />
                                </View> :
                                <View style={styles.headerImageWrap}>
                                    <MaterialCommunityIcons name="account" size={20} color={Colors['white']} />
                                </View>
                        }
                    </View>
                </TouchableHighlight>
                <View style={{ marginLeft: 5, minHeight: 46, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <AppText style={{ fontSize: 15, textTransform: 'capitalize' }}>{name}</AppText>
                    <AppText style={{ fontSize: 12, color: Colors['inActive'] }}>{status}</AppText>
                </View>
            </View>
            <TouchableHighlight underlayColor='rgba(18, 65, 188,0.1)' style={styles.sideButton} onPress={() => console.log('here')}>
                <MaterialCommunityIcons name="dots-vertical" size={25} color='rgba(0,0,0,0.8)' />
            </TouchableHighlight>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: Colors['bg'],
        paddingHorizontal: 5,
        alignItems: 'flex-end',
        flexDirection: 'row',
        elevation: 5,
        paddingBottom: 5,
        justifyContent: 'space-between'
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21.5,
        marginRight: 1,
        padding: 3

    },
    headerImageWrap: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
        position: 'relative',
        marginRight: 5,
        overflow:'hidden'
    },
    sideButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: 40,
        width: 40
    }
});