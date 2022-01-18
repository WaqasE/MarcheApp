import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Platform, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { SvgXml } from 'react-native-svg'
import Firebase from '../config/Firebase';
import { getAuth } from "firebase/auth";


import { height, width } from '../functions/Dimensions'
import Colors from '../config/Colors';
import Form from '../assets/svgs/Form';
import { AppText, AppButton, AppLoading } from '../components/'
import { ProfilePictureReq } from '../api/'

export default function ProfilePicture({ navigation }) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)
    const auth = getAuth(Firebase)

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 5],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result);
        }
    };

    const pushImage = async () => {
        if (image) {
            setLoading(true)
            const data = new FormData()
            const source = {
                uri: image.uri,
                type: `image/${image.uri.split('.')[3]}`,
                name: auth.currentUser.uid
            }
            data.append("file", source)
            data.append("upload_preset", "profilepictures")
            data.append("cloud_name", "marcheplatform")
            fetch("https://api.cloudinary.com/v1_1/marcheplatform/upload", {
                method: "post",
                body: data
            }).then(res => res.json()).
                then(async data => {
                    await ProfilePictureReq(data.secure_url)
                    setLoading(false)
                    navigation.navigate('Keywords')
                }).catch(err => {
                    console.log(err)

                })
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <SvgXml xml={Form} style={styles.formSvg} width={width} height={height / 3.4} />
            <View style={{ alignItems: 'center', justifyContent: 'space-evenly', height: height - height / 3, marginTop: height / 6 }}>
                <AppText style={styles.heading}>Choose a picture</AppText>
                <TouchableOpacity style={styles.imageWrapper} onPress={pickImage}>
                    {
                        image ?
                            <Image source={{ uri: image.uri }} style={styles.image} /> :
                            <MaterialCommunityIcons name="account" size={80} color={Colors.light} />
                    }
                </TouchableOpacity>
                {loading ?
                    <View style={[styles.loadWrapper, { backgroundColor: Colors.primary }]}>
                        <AppLoading visible={true} />
                    </View>
                    :
                    <AppButton disabled={!(image)} title='Continue' styleText={{ color: image ? Colors.light : Colors.dark }} style={{ width: width - 60, backgroundColor: image ? Colors.primary : '#d1d1d1', height: 50, borderRadius: 10, marginTop: 20 }} onPress={pushImage} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40

    },
    formSvg: {
        position: 'absolute',
        top: 0
    },
    heading: {
        fontSize: 22,
        alignSelf: 'flex-start',
        color: 'rgba(0,0,0,0.8)'
    },
    imageWrapper: {
        width: 150,
        height: 150,
        backgroundColor: '#d1d1d1',
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderWidth: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    loadWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
});