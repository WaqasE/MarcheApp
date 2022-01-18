import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AppText from './AppText';


export default function AppButton({ title, disabled,onPress, style, styleText }) {
    return (
        <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
            <View style={[styles.container, style]}>
                <AppText style={styleText}>{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});