import React from 'react';
import { Text } from 'react-native';


export default function AppText({ style, children, ...otherProps }) {
    return (
        <Text {...otherProps} style={[{ fontFamily: 'RobotoRegular', }, style]}>{children}</Text>
    );
}

