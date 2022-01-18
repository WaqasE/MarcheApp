import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Colors from '../config/Colors';

export default function AppWideCard({ id, thumbnail }) {
    return (
        <View style={styles.container}>
            {thumbnail ? <Image resizeMode='contain' style={styles.thumbnail} source={{ uri: thumbnail }} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        padding: 5,
        height:250,
    },
    thumbnail: {
        width:'100%',
        height: '100%',
        borderRadius: 10,
    }
});