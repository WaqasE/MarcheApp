import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

export default function AppScreen({ children }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});