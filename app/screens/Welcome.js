import React, { useContext } from 'react';
import { StatusBar, StyleSheet, View, Dimensions, Image } from 'react-native';
import { SvgXml } from 'react-native-svg'

import Colors from '../config/Colors';
import { AppText, AppTextButton, AppButton, AppScreen } from '../components/';
import WelcomeSvg from '../assets/svgs/Welcome';

const { width, height } = Dimensions.get('screen');

export default function Welcome({ navigation }) {
    return (
        <AppScreen>
            <View style={styles.container}>
                <View style={styles.gifWrapper}>
                    <SvgXml xml={WelcomeSvg} width={width} height={height / 1.9} />
                </View>
                <View style={styles.footer}>
                    <AppText style={styles.heading}>Welcome to Marché</AppText>
                    <AppText style={styles.detail}>it’s the simplest and safest way to sell and buy digital products..</AppText>
                    <AppButton title='Log in' style={{ backgroundColor: Colors.primary, width: width - 60, height: 50, borderRadius: 5 }} styleText={{ color: Colors.light }} onPress={() => { navigation.navigate('Login') }} />
                    <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <AppText style={{ fontSize: 15, color: Colors.inActive, marginRight: 5 }}>New to Marchè? </AppText>
                        <AppTextButton txt='Sign up' onPress={() => { navigation.navigate('Signup') }} />
                    </View>
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: Colors.bg,
        alignItems: 'center',
        justifyContent: 'flex-end',
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
        height: height / 1.9,
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
    },
    footer: {
        width,
        alignItems: 'center',
        paddingVertical: 10
    },
    detail: {
        fontSize: 17,
        color: '#8A8A92',
        maxWidth: width / 1.2,
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 15,
    }

});