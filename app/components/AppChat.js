import React, { useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../config/Colors';
import { width } from '../functions/Dimensions';
import AppText from './AppText';
import UserContext from '../context/UserContext'



export default function AppChat({ text, from, timestamp, profilePicture }) {
    const { user } = useContext(UserContext);
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginRight: 10, overflow: 'hidden', position: 'relative' }}>
                {
                    profilePicture ?
                        <View style={styles.headerImageWrap}>
                            <Image resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: profilePicture }} />
                        </View> :
                        <View style={styles.headerImageWrap}>
                            <MaterialCommunityIcons name="account" size={20} color={Colors['white']} />
                        </View>
                }
                <View style={[styles.timeLine, { backgroundColor: user.name === from ? '#d1d1d1' : Colors['primary'] }]} />
            </View>
            <View style={{ maxWidth: width - 80 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <AppText style={styles.title}>{user.name === from ? 'Me' : from}</AppText>
                    <AppText style={{ color: Colors['inActive'], fontSize: 12, marginLeft: 10 }}>{timestamp}</AppText>
                </View>
                <AppText style={styles.msg}>{text}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        width: width - 40,
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: 8,
        minHeight: 50,
        overflow: 'hidden',
    },
    headerImageWrap: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
        elevation: 4,
        marginBottom: 16,

    },
    timeLine: {
        flexGrow: 1,
        width: 2,
    },
    title: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontFamily: 'RobotoRegular'
    },
    msg: {
        fontSize: 13,
        lineHeight: 17,
        letterSpacing: 0.25,
        fontFamily: 'RobotoRegular',
        marginTop: 5,
        color: 'rgba(0,0,0,0.7)'
    }
});