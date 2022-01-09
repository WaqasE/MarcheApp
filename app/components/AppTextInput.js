import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function AppTextInput({ style, ...otherProps }) {
    return (
        <View style={[styles.container, { style }]}>
            <TextInput
                style={{width:'100%', height:'100%', paddingHorizontal:15, fontSize:15, fontFamily:'RobotoRegular'}}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        borderRadius: 5,
        marginVertical: 10,
        elevation: 3,
        overflow: 'hidden',
    }
});