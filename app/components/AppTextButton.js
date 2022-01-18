import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AppText from './AppText';

import Colors from '../config/Colors';



export default function AppTextButton({ txt, onPress }) {


    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
                <AppText style={[styles.text, { color: Colors.primary }]}>{txt}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
    }
});