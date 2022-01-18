import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg'

import Colors from '../config/Colors';
import { AppText, AppButton, AppScreen, AppLoading } from '../components/';
import Form from '../assets/svgs/Form';
import Seller from '../assets/svgs/Seller';
import Investor from '../assets/svgs/Investor';
import { RoleReq } from '../api/'
import UserContext from '../context/UserContext';


const { width, height } = Dimensions.get('screen');

export default function Role() {
    const [active, setActive] = useState('');
    const [loading, setLoading] = useState(false)
    const { user, setUser } = useContext(UserContext);

    const roleHandler = async () => {
        setLoading(true);
        const doc = await RoleReq(active);
        console.log(doc);
        // setUser(doc);
        setLoading(false);
    }
    return (
        <AppScreen>
            <View style={styles.container}>
                <View style={styles.gifWrapper}>
                    <SvgXml xml={Form} width={width} height={height / 3} />
                </View>
                <View style={styles.footer}>
                    <AppText style={styles.heading}>Select your role!</AppText>
                    <AppText style={styles.detail}>You wanna join Marche as:</AppText>
                    <View style={styles.svgsWrap}>
                        <TouchableOpacity activeOpacity={1} style={styles.svgButton} onPress={() => setActive('seller')}>
                            <SvgXml xml={Seller} width={width / 2 - 60} height={150} />
                            <AppText style={{ color: Colors.primary }}>Seller</AppText>
                            <View style={{ width: 15, height: 15, position: 'absolute', backgroundColor: active === 'seller' ? Colors.primary : Colors.white, borderRadius: 7.5, borderColor: Colors.primary, borderWidth: 3, right: 10, top: 10 }}>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.svgButton} onPress={() => setActive('investor')}>
                            <SvgXml xml={Investor} width={width / 2 - 60} height={150} />
                            <AppText style={{ color: Colors.primary }}>Investor</AppText>
                            <View style={{ width: 15, height: 15, position: 'absolute', backgroundColor: active === 'investor' ? Colors.primary : Colors.white, borderRadius: 7.5, borderColor: Colors.primary, borderWidth: 3, right: 10, top: 10 }}>

                            </View>
                        </TouchableOpacity>
                    </View>
                    {loading ?
                        <View style={[styles.loadWrapper, { backgroundColor: Colors.primary }]}>
                            <AppLoading visible={true} />
                        </View>
                        :
                        <AppButton title='Continue' styleText={{ color: active ? Colors.light : Colors.dark }} style={{ width: width - 60, backgroundColor: active ? Colors.primary : '#d1d1d1', height: 50, borderRadius: 10, marginTop: 20 }} disabled={!active} onPress={roleHandler} />}
                </View>
            </View >
        </AppScreen >
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: Colors.bg,
        alignItems: 'center',
        paddingBottom: 50
    },
    heading: {
        fontSize: 30,
        color: Colors.dark,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    gifWrapper: {
        width,
        height: height / 3,
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
    },
    footer: {
        width,
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: height / 2.8

    },
    detail: {
        fontSize: 17,
        color: '#8A8A92',
        maxWidth: width / 1.2,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 15,
    },
    svgsWrap: {
        flexDirection: 'row',
        height: 170,
        width: width - 60,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 50
    },
    svgButton: {
        alignItems: 'center',
        borderColor: Colors.primary,
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        elevation: 2,
        position: 'relative'
    },
    loadWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },

});