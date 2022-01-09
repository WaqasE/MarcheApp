import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../config/Colors';
import { height, width } from '../functions/Dimensions';



import { AppHeader, AppInboxChat, AppScreen } from '../components';
import User from '../context/UserContext';

export default function Inbox({ navigation }) {
    const [chats, setChats] = useState([{ id: 1 }]);
    const { user, setUser } = useContext(User);

    const inboxChatHandler = async () => {
        const modifiedUser = { ...user };
        modifiedUser.unreadMsgs = null;
        await setUser(() => (modifiedUser))
        navigation.navigate('Chat')
    }

    return (
        <AppScreen>
            <View style={styles.container}>
                <AppHeader title='Inbox'  name='message'>
                    <TouchableWithoutFeedback>
                        <View style={styles.headerImageWrap}>
                            <MaterialCommunityIcons name="filter-variant" size={25} color={Colors['dark']} />
                        </View>
                    </TouchableWithoutFeedback>
                </AppHeader>
                <ScrollView  showsVerticalScrollIndicator={false} style={styles.wrapper} contentContainerStyle={{ alignItems: 'center' }}>
                    {
                        chats.map((_, i) => (
                            <AppInboxChat key={i} onPress={inboxChatHandler} profilePicture='https://res.cloudinary.com/marcheplatform/image/upload/v1641691345/profilepictures/r2j6aheqttfqxlabg6cq.jpg' name='Julein' timeStamp='1:17AM' latestMsg='Pariatur consequat officia esse nisi Pariatur consequat officia esse nisi voluptate sunt veniam commodo.' status='online' seen={true} />
                        ))
                    }
                </ScrollView>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    headerImageWrap: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        minHeight: height - 135,
        width,
        paddingVertical: 10
    },
});