import React, { useContext } from 'react';
import { FlatList, StyleSheet, TouchableWithoutFeedback, View, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { AppScreen, AppHeader, AppText, AppMinimalCard, AppWideCard } from '../../components/'
import UserContext from '../../context/UserContext';
import Colors from '../../config/Colors';
import { width, height } from '../../functions/Dimensions'

const popArtist = [{ id: 1, profilePicture: 'https://res.cloudinary.com/marcheplatform/image/upload/v1639354263/profilepictures/61b68f820fdbe545c5a99131_c4hmbx.jpg', name: 'ehmed' }, { id: 2, profilePicture: '', name: 'saad' }, { id: 4, profilePicture: '', name: 'wasiq' }, { id: 5, profilePicture: '', name: 'tooba' }, { id: 6, profilePicture: '', name: 'suhaib' }, { id: 7, profilePicture: '', name: 'shams' },]
const products = [
    { id: 1, },
    { id: 2, },
    { id: 3, },
    { id: 4, },
    { id: 5, },
    { id: 6, },
    { id: 7, },
    { id: 8, },
    { id: 9, },
    { id: 10, },
    { id: 11, },
    { id: 12, },
]

export default function Marketplace() {
    const { user } = useContext(UserContext);
    return (
        <AppScreen>
            <View style={styles.container}>
                <AppHeader title='Marketplace' name='store'>
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
                <ScrollView style={styles.wrapper}>
                    <View style={styles.popProfileWrap}>
                        <AppText style={styles.heading}>Popular Profiles</AppText>
                        <FlatList
                            data={popArtist}
                            nestedScrollEnabled
                            keyExtractor={(item) => item.id.toString()}
                            style={{ marginTop: 15 }}
                            scrollEnabled
                            horizontal
                            renderItem={({ item, index }) => (
                                <TouchableWithoutFeedback>
                                    <View style={[styles.proWrap, { marginLeft: index === 0 ? 20 : 5, marginRight: index === popArtist.length - 1 ? 20 : 5, }]}>
                                        <View style={styles.profileWrap}>
                                            {
                                                item.profilePicture ?
                                                    <Image style={{ width: '100%', height: '100%', borderRadius: 30 }} source={{ uri: item.profilePicture }} /> :
                                                    <MaterialCommunityIcons name="account" size={30} color={Colors['white']} />
                                            }
                                        </View>
                                        <AppText style={styles.inActiveText}>{item.name}</AppText>
                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                        />
                    </View>
                    <View style={styles.discoverWrap}>
                        <AppText style={styles.heading}>Discover</AppText>
                        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                            {
                                products.map(({ id }, i) => (
                                    <View key={i} style={i % 3 === 0 ? styles.wideCard : styles.minimalCard}>
                                        {
                                            id % 3 === 0 ?
                                                <AppWideCard /> :
                                                <AppMinimalCard />}
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        </AppScreen >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    wrapper: {
        minHeight: height - 135,
        width,
    },
    headerImageWrap: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
        position: 'relative',
    },
    popProfileWrap: {
        width,
        marginVertical: 15
    },
    heading: {
        fontSize: 17,
        paddingHorizontal: 20
    },
    proWrap: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    profileWrap: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#d1d1d1',
        borderColor: Colors['primary'],
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    inActiveText: {
        fontSize: 12,
        color: Colors['inActive'],
        textTransform: 'capitalize',
        marginTop: 5
    },
    discoverWrap: {
        flexDirection: 'column',
    },
    wideCard: {
        width: '100%',
        height: 250,
        marginVertical: 10,

    },
    minimalCard: {
        width: '49%',
        height: 250,
        marginVertical: 10,

    }
});