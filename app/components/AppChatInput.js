import React, { useContext } from 'react';
import { StyleSheet, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { width, height } from '../functions/Dimensions'
import Colors from '../config/Colors'
import User from '../context/UserContext';

export default function AppChatInput({ newMsg, setNewMsg, setChats, chats }) {

    const { user } = useContext(User);

    const sendHander = () => {
        if (newMsg) {
            setChats([...chats, { id: chats.length, text: newMsg, from: user.name, timestamp: '1:10AM', profilePicture: user.profilePicture }])
            setNewMsg('')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TouchableHighlight underlayColor='rgba(18, 65, 188,0.1)' onPress={() => console.log('here')} style={styles.inputItem}>
                    <MaterialCommunityIcons name="flash" size={25} color={Colors['inActive']} />
                </TouchableHighlight>
                <TextInput
                    placeholder='Message'
                    keyboardType='default'
                    keyboardAppearance='default'
                    style={styles.textInput}
                    multiline={true}
                    maxLength={700}
                    selectionColor='rgba(18, 65, 188,0.1)'
                    onChangeText={(newMsg) => { setNewMsg(newMsg) }}
                    value={newMsg}
                />
            </View>
            <TouchableWithoutFeedback onPress={sendHander}>
                <View style={styles.sendButton}>
                    <MaterialCommunityIcons name="send" size={25} color={Colors['white']} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 15
    },
    inputWrapper: {
        width: width - 70,
        height: 50,
        backgroundColor: Colors['light'],
        borderRadius: 30,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputItem: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors['primary'],
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: width - 120,
        height: '100%',
        borderRadius: 30,
        paddingRight: 15

    }
});