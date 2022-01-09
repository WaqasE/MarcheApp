import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import Colors from '../config/Colors';
import { height, width } from '../functions/Dimensions';
import AppButton from './AppButton';

export default function AppTextFieldPopup({ title, setTitle, inputPopup, setInputPopup }) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <AppText style={styles.title}>Gig Title</AppText>
                <AppTextInput
                    placeholder='Write A Title'
                    style={{ marginVertical: 0 }}
                    onChangeText={(title) => setTitle(title)}
                    value={title}
                />
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <AppButton
                        title='Cancel'
                        style={{ backgroundColor: '#d1d1d1', borderRadius: 5, width: '45%' }}
                        styleText={{ color: Colors['black'] }}
                        onPress={() => setInputPopup(false)}
                    />
                    <AppButton
                        title='Ok'
                        style={{ backgroundColor: Colors['primary'], borderRadius: 5, width: '45%' }}
                        styleText={{ color: Colors['white'] }}
                        onPress={() => setInputPopup(false)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    wrapper: {
        width: width - 60,
        minHeight: 220,
        borderRadius: 10,
        backgroundColor: Colors['white'],
        elevation: 5,
        padding: 30,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 17,
    }
});