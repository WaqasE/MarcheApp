import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { AppHeader, AppScreen, AppBid, AppText } from '../../components';
import Colors from '../../config/Colors';

import { height, width } from '../../functions/Dimensions';

const filter = [{ id: 1, title: 'all' }, { id: 2, title: 'approved' }, { id: 3, title: 'declined' }];
const bids = [
    { _id: 1, title: 'Unique Illustration', bidStatus: 'approved', bidPrice: '300$', name: 'Julein' },
    { _id: 2, title: 'Unique Illustration', bidStatus: 'declined', bidPrice: '600$', name: 'John' },
    { _id: 3, title: 'Unique Illustration', bidStatus: 'awaiting', bidPrice: '1000$', name: 'Cortez' },
    { _id: 4, title: 'Unique Illustration', bidStatus: 'declined', bidPrice: '600$', name: 'Agnes' },
]

export default function Bids() {
    const [active, setActive] = useState('all')
    const NavigatorButton = ({ title, active }) => {
        return (
            <TouchableWithoutFeedback onPress={() => setActive(title)}>
                <View style={{ width: '33%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: active === title ? Colors['primary'] : 'transparent', borderRadius: active === title ? 10 : 0 }}>
                    <AppText style={{ textTransform: 'capitalize', color: active === title ? Colors['white'] : Colors['black'] }}>{title}</AppText>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <AppScreen>
            <View style={styles.container}>
                <AppHeader title='Product Bids' name='format-list-numbered' />
                <View style={styles.filterWrapper}>
                    {
                        filter.map(
                            ({ id, title }) => (
                                <NavigatorButton key={id} title={title} active={active} />
                            )
                        )
                    }
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper} contentContainerStyle={{ alignItems: 'center' }}>
                    {
                        bids.map(({ _id, title, bidStatus, bidPrice, name }) => (
                            <View key={_id}>
                                {
                                    bidStatus === active ?
                                        <AppBid title={title} bidStatus={bidStatus} bidPrice={bidPrice} name={name} /> :
                                        active === 'all' ?
                                            <AppBid title={title} bidStatus={bidStatus} bidPrice={bidPrice} name={name} /> :
                                            null
                                }
                            </View>
                        ))
                    }
                    <View style={{ height: 200, width: '100%' }} />
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
        minHeight: height - 135,
        width,
        paddingVertical: 10,

    },
    filterWrapper: {
        width: width - 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: Colors['white'],
        marginTop: 30,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
    }
});