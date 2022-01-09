import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg'

import { AppHeader, AppText, AppDonut, AppScreen } from '../../components/'
import Colors from '../../config/Colors';
import UserContext from '../../context/UserContext'
import CheckGreater from '../../functions/CheckGreater';
import { height, width } from '../../functions/Dimensions';

export default function Home() {
    const { user } = useContext(UserContext);
    const [popupActive, setPopupActive] = useState(false);

    return (
        <AppScreen>
            <View style={styles.container} stickyHeaderIndices={[0]}>
                <AppHeader title='Home' name='home'>
                    {
                        user.profilePicture ?
                            <View style={styles.headerImageWrap}>
                                <View style={{ width: 30, height: 30, borderRadius: 15, overflow: 'hidden' }}>
                                    <Image resizeMode='contain' style={{ width: 30, height: 30, borderRadius: 15 }} source={{ uri: user.profilePicture }} />
                                </View>
                                <View style={{ width: 11.5, borderColor: 'white', borderWidth: 1.5, height: 11.5, borderRadius: 6.25, backgroundColor: user.status === 'online' ? '#00FF00' : 'grey', position: 'absolute', right: -2, bottom: -2 }} />
                            </View> :
                            <View style={styles.headerImageWrap}>
                                <MaterialCommunityIcons name="account" size={20} color={Colors['white']} />
                                <View style={{ width: 11.5, borderColor: 'white', borderWidth: 1.5, height: 11.5, borderRadius: 6.25, backgroundColor: user.status === 'online' ? '#00FF00' : 'grey', position: 'absolute', right: -2, bottom: -2 }} />
                            </View>
                    }
                </AppHeader>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper} contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={styles.card}>
                        <LinearGradient
                            colors={[Colors['primary'], '#434343']}
                            style={styles.gradient}
                            start={[0, 0]}
                            end={[1, 1]}
                        />
                        <Image source={require('../../assets/chip.png')} style={{ position: 'absolute', height: 70, width: 70, top: 30, right: 30 }} />
                        <AppText style={{ fontSize: 17, color: '#d1d1d1' }}>Total balance</AppText>
                        <AppText style={{ fontSize: 50, color: Colors['white'], marginVertical: 10 }}>{user.balance}</AppText>
                        <View style={styles.cardFooterWrap}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <AppText style={{ fontSize: 20, color: '#d1d1d1', marginRight: 7, paddingTop: 5 }}>****</AppText>
                                <AppText style={{ fontSize: 18, color: '#d1d1d1' }}>{user.cardNumber.split(" ")[3]}</AppText>
                            </View>
                            <TouchableWithoutFeedback>
                                <View style={styles.dropDown}>
                                    <AppText style={{ fontSize: 15, color: Colors['dark'] }}>{user.currency}</AppText>
                                    <MaterialCommunityIcons name={popupActive ? 'chevron-up' : 'chevron-down'} size={20} color={Colors['dark']} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.contentWrapper}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ width: 35, height: 35, borderRadius: 17.5, backgroundColor: Colors['primary'], marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name='chart-line-variant' size={20} color={Colors['white']} />
                            </View>
                            <AppText style={{ fontSize: 18, color: Colors['black'] }}>Statistics</AppText>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={[styles.contentCard, { backgroundColor: 'transparent', alignItems: 'center', height: 150 }]}>
                                <View style={styles.ellipseCard}>
                                    <AppDonut percentage={user.rating / 5 * 100} />
                                    <AppText style={{ fontSize: 18, color: Colors['black'], }}>{user.rating}</AppText>
                                </View>
                                <AppText style={[styles.gigTitle, { color: Colors['dark'], textAlign: 'center' }]}>Rating</AppText>
                            </View>
                            <View style={[styles.contentCard, { backgroundColor: 'transparent', alignItems: 'center', height: 150 }]}>
                                <View style={styles.ellipseCard}>
                                    <AppDonut percentage={user.RR / 100 * 100} />
                                    <AppText style={{ fontSize: 18, color: Colors['black'], }}>{user.RR}</AppText>
                                </View>
                                <AppText style={[styles.gigTitle, { color: Colors['dark'], textAlign: 'center' }]}>Response Rate</AppText>
                            </View>
                            <View style={[styles.contentCard, { backgroundColor: 'transparent', alignItems: 'center', height: 150 }]}>
                                <View style={styles.ellipseCard}>
                                    <AppDonut percentage={user.quality / 100 * 100} />
                                    <AppText style={{ fontSize: 18, color: Colors['black'], }}>{user.quality}</AppText>
                                </View>
                                <AppText style={[styles.gigTitle, { color: Colors['dark'], textAlign: 'center' }]}>Quality</AppText>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.contentWrapper, { marginBottom: 20 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ width: 35, height: 35, borderRadius: 17.5, backgroundColor: Colors['primary'], marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name='clipboard-list' size={20} color={Colors['white']} />
                            </View>
                            <AppText style={{ fontSize: 18, color: Colors['black'] }}>My Gigs</AppText>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={[styles.contentCard, { borderColor: Colors['primary'], borderWidth: 3 }]}>
                                <AppText style={[[styles.gigTitle, { color: Colors['black'] }]]}>Bids</AppText>
                                <AppText style={{ fontSize: 30, color: Colors['dark'], alignSelf: 'center', marginTop: 7 }}>{user.bids}</AppText>
                            </View>
                            <View style={[styles.contentCard, { borderColor: Colors['primary'], borderWidth: 3 }]}>
                                <AppText style={[styles.gigTitle, { color: Colors['black'] }]}>Views</AppText>
                                <AppText style={{ fontSize: 30, color: Colors['dark'], alignSelf: 'center', marginTop: 7 }}>{user.views}</AppText>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                            <AppText style={{ fontSize: 15, color: Colors['dark'], alignSelf: 'center', }}>New Bids</AppText>
                            <View style={{ padding: 5, borderRadius: 15, borderColor: Colors['primary'], borderWidth: 1.2, minWidth: 40, minHeight: 25, backgroundColor: 'rgba(18, 65, 188,0.2)', justifyContent: 'center', alignItems: 'center' }}>
                                <AppText style={{ fontSize: 13, color: Colors['primary'] }}>{user.newBids}</AppText>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View >
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center'
    },
    headerImageWrap: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
        position: 'relative'
    },
    wrapper: {
        minHeight: height - 135,
        width,
    },
    card: {
        width: width - 40,
        height: height / 4,
        backgroundColor: Colors['white'],
        marginVertical: 15,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 15,
        padding: 20,
        elevation: 5
    },
    gradient: {
        position: 'absolute',
        width: width - 40,
        alignItems: 'center',
        height: height / 4,
    },
    dropDown: {
        width: 90,
        height: 35,
        backgroundColor: Colors['light'],
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    cardFooterWrap: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    contentWrapper: {
        width: width - 40,
        backgroundColor: Colors['white'],
        marginVertical: 10,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 10,
        padding: 20,
        elevation: 2
    },
    contentCard: {
        width: (width - 120) / 2.5,
        borderRadius: 10,
        backgroundColor: Colors['white'],
        marginVertical: 15,
        padding: 15,
        backgroundColor: 'rgba(18, 65, 188,0.1)'

    },
    gigTitle: {
        fontSize: 12,
        color: '#d1d1d1'
    },
    ellipseCard: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    }
});