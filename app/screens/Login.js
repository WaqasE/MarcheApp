import React, { useContext, useState } from 'react';
import { StyleSheet, View, Dimensions, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg'

import { AppText, AppButton, AppTextButton, AppLoading, AppTextInput, AppErrorToast, AppScreen } from '../components/';
import Form from '../assets/svgs/Form';
// import { LoginReq } from '../api/'

import Colors from '../config/Colors';
// import UserContext from '../context/UserContext';
// import { setToken } from '../context/UserStorage'
import {width, height} from '../functions/Dimensions'


export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [hide, setHide] = useState(true);
    // const { setUser } = useContext(UserContext);

    const loginHander = async () => {
        if (email && password) {
            setLoading(true);
            // const res = await LoginReq(email, password)
            // if (res.status === 200) {
            //     console.log(jwtDecode(res.data.accessToken))
            //     setToken(res.data.accessToken);
            //     setUser(jwtDecode(res.data.accessToken))
            //     setLoading(false);
            // }
            // else {
            //     setError(res.data)
            //     setLoading(false);
            // }
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
                <SvgXml xml={Form} style={styles.formSvg} width={width} height={height / 3} />
                <View style={{ marginTop: height / 4 }}>
                    <AppText style={styles.heading}>Welcome back,</AppText>
                    <AppText style={styles.detail}>Sign in to Marchè to pick up exactly where you left off.</AppText>
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
                        <AppButton disabled={!(email && password)} title='Continue' styleText={{ color: email && password ? Colors.light : Colors.dark }} style={{ width: width - 60, backgroundColor: email && password ? Colors.primary : '#d1d1d1', height: 50, borderRadius: 10, marginTop:20 }} onPress={loginHander} />}
                    <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <AppText style={{ fontSize: 15, color: Colors.inActive, marginRight: 5 }}>New to Marchè? </AppText>
                        <AppTextButton txt='Sign up' onPress={() => { navigation.navigate('Signup') }} />
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
        backgroundColor: Colors.bg,
        paddingVertical: 40,
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
    separater: {
        width: width / 2 - 50,
        height: 0.5,
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