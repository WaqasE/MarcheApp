import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { width, height } from '../../functions/Dimensions.js'
import Colors from '../../config/Colors';

import { AppDonut, AppProfileItem, AppScreen, AppText } from '../../components';
import UserContext from '../../context/UserContext';

const profileItems = [
    {
        id: 1,
        name: 'chart-timeline-variant',
        title: 'Earnings'
    },
    {
        id: 2,
        name: 'account',
        title: 'My Profile'
    },
    {
        id: 3,
        name: 'format-list-text',
        title: 'Gigs'
    },
    {
        id: 4,
        name: 'google-circles',
        title: 'Show online status'
    },
    {
        id: 5,
        name: 'credit-card-outline',
        title: 'Payment'
    },
    {
        id: 6,
        name: 'logout',
        title: 'Logout'
    }
]

export default function Profile() {
    const { user } = useContext(UserContext);
    return (
        <AppScreen>
            <View style={styles.container}>
                <View style={styles.coverWrapper}>
                    <View style={styles.cover}>
                        <AppDonut percentage={70} radius={52} strokeWidth={6} inActiveStroke='transparent' />
                        {
                            user.profilePicture ?
                                <View style={styles.imageWrap}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={{ uri: user.profilePicture }} />
                                </View> :
                                <View style={styles.imageWrap}>
                                    <MaterialCommunityIcons name="account" size={40} color={Colors['white']} />
                                </View>
                        }
                    </View>
                    <View style={{ height: 100, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 2, height: '100%', backgroundColor: '#d1d1d1' }} />
                        <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
                            <AppText style={{ fontSize: 15, color: Colors['inActive'], marginBottom: 5 }}>Joined</AppText>
                            <AppText style={{ fontSize: 17, color: Colors['dark'] }}>{user.joined}</AppText>
                        </View>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <AppText style={styles.name}>{user.name}</AppText>
                    </View>
                    <AppText style={styles.username}>@{user.username}</AppText>
                </View>
                <ScrollView style={styles.wrapper}>
                    {profileItems.map(({ id, name, title }) => (
                        <AppProfileItem key={id} name={name} title={title} />
                    ))}
                </ScrollView>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    wrapper: {
        height: '100%',
        width: '100%',
    },
    coverWrapper: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 180,
        alignItems: 'flex-end',
        paddingHorizontal: 30
    },
    cover: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    imageWrap: {
        width: 70,
        height: 70,
        borderRadius: 35,
        elevation: 5,
        backgroundColor: '#d1d1d1',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    column: {
        justifyContent: 'center',
        marginVertical: 15,
        width: '100%',
        paddingHorizontal: 30
    },
    name: {
        fontSize: 27,
        maxWidth: '70%',
        color: Colors['black'],
        textTransform: 'capitalize'
    },
    username: {
        fontSize: 15,
        color: Colors['inActive'],
        marginTop: 2
    }
});