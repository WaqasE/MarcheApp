import React, { useContext, useState } from 'react';
import { StyleSheet, View, Dimensions, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg'


import { AppText, AppButton, AppScreen, AppLoading, AppTextInput, AppErrorToast, AppTextButton } from '../components/';
import Form from '../assets/svgs/Form';
import { Join } from '../api/'
// import UserContext from '../context/UserContext'
// import { setToken } from '../context/UserStorage';

import Colors from '../config/Colors';
// import jwtDecode from 'jwt-decode';


const { width, height } = Dimensions.get('screen');


export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // const { setUser } = useContext(UserContext);
    const [hide, setHide] = useState(true)

    const signupHander = async () => {
        if (email && password && name) {
            setLoading(true);
            const res = await Join(email, password, name);
            if (res?.error) {
                setError(res.error)
                setLoading(false)
            }
            else {
                setLoading(false)
                navigation.navigate('ProfilePicture');
            }
        }
        else {
            setError('All fields are required!')
        }
    }

    const errorHandler = () => {
        setError('');
        setEmail('');
        setPassword('');
    }



    return (
        <AppScreen>
            <View style={[styles.container, { backgroundColor: Colors.bg }]}>
                <SvgXml xml={Form} style={styles.formSvg} width={width} height={height / 3.5} />
                <View style={{ marginTop: height / 4 }}>
                    <AppText style={styles.heading}>Join Marchè,</AppText>
                    <AppText style={styles.detail}>it’s the simplest and safest way to sell and buy digital products.</AppText>
                    <AppTextInput
                        icon='account'
                        placeholder='Name'
                        onChangeText={
                            (name) => {
                                setName(name)
                            }
                        }
                        value={name}
                    />
                    <AppTextInput
                        icon='at'
                        placeholder='Email'
                        onChangeText={
                            (email) => {
                                setEmail(email)
                            }
                        }
                        value={email}
                    />
                    <AppTextInput
                        icon='lock'
                        placeholder='Password'
                        secureTextEntry={hide}
                        onChangeText={
                            (password) => {
                                setPassword(password)
                            }
                        }
                        secondIcon={hide ? 'eye-off' : 'eye'}
                        value={password}
                        onPress={(hide) => setHide(!hide)}
                    />
                    {loading ?
                        <View style={[styles.loadWrapper, { backgroundColor: Colors.primary }]}>
                            <AppLoading visible={true} />
                        </View>
                        :
                        <AppButton disabled={!(email && password && name)} title='Continue' styleText={{ color: email && password && name ? Colors.light : Colors.dark }} style={{ width: width - 60, backgroundColor: email && password && name ? Colors.primary : '#d1d1d1', height: 50, borderRadius: 10, marginTop: 20 }} onPress={signupHander} />}
                    <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <AppText style={{ fontSize: 15, color: Colors.inActive, marginRight: 5 }}>Already a user? </AppText>
                        <AppTextButton txt='Login' onPress={() => { navigation.navigate('Login') }} />
                    </View>
                </View>
                {error ? <View style={styles.overlay}>
                    <AppErrorToast error={error} onPress={errorHandler} />
                </View> : null}
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        paddingHorizontal: 30,
    },
    formSvg: {
        position: 'absolute',
        top: 0
    },
    heading: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold'
    },
    detail: {
        fontSize: 15,
        marginTop: 5,
        color: Colors.inActive,
        marginBottom: 10
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
    overlay: {
        width,
        height,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        elevation: 3
    }
});