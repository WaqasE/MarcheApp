import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import Colors from '../config/Colors';

export default function AppMinimalCard({ thumbnail }) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                {thumbnail ? <Image resizeMode='stretch' style={styles.thumbnail} source={{ uri: thumbnail }} /> : null}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        padding: 5,
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
});