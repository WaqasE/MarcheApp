import React from 'react';
import {  StyleSheet,View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import { AppScreen, AppHeader, AppText,  } from '../../components/'
import UserContext from '../../context/UserContext';
import Colors from '../../config/Colors';
import { width, height } from '../../functions/Dimensions'

export default function Search()  {
    return  (
        <AppScreen>
        <View style={styles.container}></View>
        </AppScreen>
     );
}

const styles = StyleSheet.create({
    container:{}
 });