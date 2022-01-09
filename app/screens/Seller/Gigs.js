import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View, TouchableHighlight, TouchableWithoutFeedback, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppButton, AppHeader, AppScreen, AppText, AppTextFieldPopup } from '../../components';
import { width, height } from '../../functions/Dimensions'
import Colors from '../../config/Colors';
import Keywords from '../Keywords';
export default function Gigs({ navigation }) {
    const [thumbnail, setThumbnail] = useState([]);
    const [title, setTitle] = useState('');
    const [keywords, setKeywords] = useState([{ id: 1, title: 'hello' }, { id: 1, title: 'hello' }, { id: 1, title: 'hello' }, { id: 1, title: 'blah blah' }, { id: 1, title: 'gibrish' },]);
    const [inputPopup, setInputPopup] = useState(false);
    const [description, setDescription] = useState('');
    const [inputDescriptionPopup, setDescriptionPopup] = useState(false);
    const [bid, setBid] = useState(0)

    return (
        <AppScreen>
            <View style={styles.container}>
                <AppHeader title='Create Gig' name='plus-circle'>
                    <TouchableHighlight underlayColor='transparent' style={styles.sideButton} onPress={() => navigation.navigate('HomeSeller')}>
                        <MaterialCommunityIcons name="home" size={25} color={Colors['primary']} />
                    </TouchableHighlight>
                </AppHeader>
                <ScrollView style={styles.wrapper} contentContainerStyle={{ alignItems: 'center' }}>
                    <View style={styles.thumbnail}>
                        {thumbnail.length > 0 ? <Image source={{ uri: thumbnail[0] }} /> :
                            <MaterialCommunityIcons name="image-plus" size={60} color='rgba(18, 65, 188,0.5)' />
                        }
                    </View>
                    <TouchableWithoutFeedback onPress={() => setInputPopup(!inputPopup)}>
                        <View style={styles.titleWrap}>
                            <AppText style={{ fontSize: 17, color: Colors['inActive'] }}>{title ? title : 'Gig Title'}</AppText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Keywords')}>
                        <View style={styles.keywordsWrap}>
                            {keywords.length > 0 ?
                                <>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 15 }}>
                                        <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: Colors['primary'], marginRight: 10 }} />
                                        <AppText>Keywords</AppText>
                                    </View>
                                    <View style={styles.tagsWrap}>
                                        {
                                            keywords.map(({ title }, i) => (
                                                <AppText key={i} style={[styles.keyword, { backgroundColor: 'rgba(18, 65, 188,0.1)', color: Colors.dark }]}>{title}</AppText>
                                            ))
                                        }
                                    </View>
                                </>
                                :
                                <AppText style={{ fontSize: 17, color: Colors['inActive'] }}> Select five keywords</AppText>
                            }

                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => setInputPopup(!inputPopup)}>
                        <View style={styles.descriptionWrap}>
                            <AppText style={{ fontSize: 17, color: Colors['inActive'] }}>{description ? description : 'Description'}</AppText>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.bidPricingWrap}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 25 }}>
                            <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: Colors['primary'], marginRight: 10 }} />
                            <AppText>Minimum Bid</AppText>
                        </View>
                        <View style={{ width: '100%', height: 60, backgroundColor: 'rgba(18, 65, 188,0.1)', alignSelf: 'center', justifyContent: 'space-evenly', padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableWithoutFeedback>
                                <View style={styles.bidItem}>
                                    <MaterialCommunityIcons name="minus" size={30} color={Colors['primary']} />
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={[styles.bidItem, { borderColor: Colors['primary'], borderWidth: 2, borderRadius: 5, backgroundColor: 'white', height: '90%', width: '25%' }]}>
                                <AppText style={{ fontSize: 25, color: Colors['primary'], }}>{bid}</AppText>
                            </View>
                            <TouchableWithoutFeedback>
                                <View style={styles.bidItem}>
                                    <MaterialCommunityIcons name="plus" size={30} color={Colors['primary']} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <AppButton title='Submit' styleText={{ color: Colors['white'] }} style={{ backgroundColor: Colors['primary'], marginTop: 25, marginBottom: 100, height: 50, borderRadius: 5 }} />
                </ScrollView>
                {inputPopup && <AppTextFieldPopup title={title} setTitle={setTitle} inputPopup={inputPopup} setInputPopup={setInputPopup} />}
                {inputDescriptionPopup && <AppTextFieldPopup title={description} setTitle={setDescription} inputPopup={inputDescriptionPopup} setInputPopup={inputDescriptionPopup} />}
            </View>
        </AppScreen >
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height: '100%',
        flex: 1
    },
    wrapper: {
        width,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    sideButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryDetails: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    thumbnail: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors['primary']
    },
    titleWrap: {
        width: '100%',
        paddingHorizontal: 30,
        height: 50,
        marginTop: 40,
        marginBottom: 15,
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 10
    },
    descriptionWrap: {
        width: '100%',
        paddingHorizontal: 30,
        minHeight: 100,
        marginVertical: 15,
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 10
    },
    keywordsWrap: {
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 20,
        minHeight: 50,
        marginVertical: 15,
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 10
    },
    tagsWrap: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1,
        alignContent: 'flex-start',
        justifyContent: 'center'

    },
    keyword: {
        fontSize: 15,
        color: Colors.dark,
        paddingHorizontal: 13,
        paddingVertical: 8,
        borderRadius: 4,
        marginVertical: 8,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderColor: Colors['primary'],
        borderWidth: 2
        // elevation: 2,
    },
    bidPricingWrap: {
        width: '100%',
        paddingHorizontal: 30,
        minHeight: 100,
        marginVertical: 15,
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    modalWrap: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors['light']
    },
    bidItem: {
        width: '28%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});