import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppChatHeader, AppChatInput, AppScreen, AppText } from '../components';
import { height, width } from '../functions/Dimensions';
import Colors from '../config/Colors';
import { AppChat } from '../components/';

export default function Chat({ navigation }) {
    const [chats, setChats] = useState([]);
    const scrollViewRef = useRef();
    const [newMsg, setNewMsg] = useState('')


    return (
        <AppScreen>
            <View style={styles.container}>
                <AppChatHeader title='Chat' status='Online' profilePicture='https://res.cloudinary.com/marcheplatform/image/upload/v1641691345/profilepictures/r2j6aheqttfqxlabg6cq.jpg' name='julein' navigation={navigation} />
                <ScrollView
                    ref={scrollViewRef}
                    showsVerticalScrollIndicator={false}
                    style={styles.wrapper}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    <View style={{ width: width - 40, backgroundColor: '#d1d1d1', padding: 12, paddingHorizontal: 15, alignSelf: 'center', marginVertical: 20, borderRadius: 25 }}>
                        <AppText style={{ fontSize: 12, color: 'rgba(0,0,0,0.7)', textAlign: 'center', lineHeight: 15, letterSpacing: 0.2 }}>
                            <MaterialCommunityIcons name="lock" size={12} color="rgba(0,0,0,0.7)" />
                            Messages are end-to-end encrypted. No one outside of this chat, not even Marche, can read them.
                        </AppText>
                    </View>
                    {chats.map(
                        ({ text, from, timestamp, profilePicture }, i) => (
                            <AppChat key={i} text={text} from={from} timestamp={timestamp} profilePicture={profilePicture} />
                        )
                    )}

                    <View style={{ height: 30, width: '100%' }} />
                </ScrollView>
                <AppChatInput newMsg={newMsg} setNewMsg={setNewMsg} chats={chats} setChats={setChats} />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    wrapper: {
        width: '100%',
        height: height - 160,
    }
});