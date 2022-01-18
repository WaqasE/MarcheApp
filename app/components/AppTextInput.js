import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { width } from '../functions/Dimensions';
import Colors from '../config/Colors'


export default function AppTextInput({ children, icon, style, ...otherProps }) {
    return (
        <View style={[styles.container, { style }]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={Colors.inActive} />}
            <TextInput
                style={{ width: width - 95, height: '100%', paddingHorizontal: 5, fontSize: 15, fontFamily: 'RobotoRegular', borderBottomColor: '#d1d1d1', borderBottomWidth: 2 }}
                {...otherProps}
            />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});