import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AppHeader, AppScreen, AppText, AppButton, AppLoading } from '../components';
import { height, width } from '../functions/Dimensions';
import Colors from '../config/Colors';
import { KeywordsReq } from '../api/'


const skills = [{ id: 1, title: 'Elctronics' }, { id: 2, title: 'Stocks' }, { id: 3, title: 'AI' }, { id: 4, title: 'Illustrations' }, { id: 5, title: 'Interior design' }, { id: 6, title: 'Mobile Apps' }, { id: 7, title: 'Crypto' }, { id: 8, title: 'UI/UX' }, { id: 9, title: 'Web Apps' }, { id: 10, title: 'Cyber Security' }, { id: 11, title: 'Portraits' }, { id: 12, title: 'Finance' }, { id: 13, title: 'Mechanics' }, { id: 14, title: 'Pyschology' }, { id: 15, title: 'Medical' }, { id: 16, title: 'Inovation' },]

export default function Keywords({ navigation }) {
    const [skillsSelected, setSkillsSelected] = useState([]);
    const [loading, setLoading] = useState(false);
    const skillsHandler = (title) => {
        const exist = skillsSelected.indexOf(title);
        if (exist === -1) {
            setSkillsSelected([...skillsSelected, title])
        }
        else {
            const data = skillsSelected;
            data.splice(exist, 1)
            setSkillsSelected([...data])
        }
    }

    const keywordsPush = async () => {
        if (skillsSelected.length > 0) {
            setLoading(true);
            const doc = await KeywordsReq(skillsSelected);
            setLoading(false);
            navigation.navigate('Role');
        }
    }

    return (
        <AppScreen>
            <View style={styles.container}>
                <AppHeader title='Keywords' />
                <View style={[styles.container, { justifyContent: 'space-evenly' }]}>
                    <View style={styles.skillWrap}>
                        {skills.map(({ id, title }) => (
                            <TouchableOpacity key={id} onPress={() => skillsHandler(title)}>
                                <AppText style={[styles.keyword, { backgroundColor: skillsSelected.indexOf(title) !== -1 ? Colors.primary : '#d1d1d1', color: skillsSelected.indexOf(title) === -1 ? Colors.dark : Colors.light }]}>{title}</AppText>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {loading ?
                        <View style={[styles.loadWrapper, { backgroundColor: Colors.primary }]}>
                            <AppLoading visible={true} />
                        </View>
                        :
                        <AppButton disabled={!skillsSelected.length > 0} title='Continue' styleText={{ color: skillsSelected.length > 0 ? Colors.light : Colors.dark }} style={{ width: width - 60, backgroundColor: skillsSelected.length > 0 ? Colors.primary : '#d1d1d1', height: 50, borderRadius: 10, marginTop: 20 }} onPress={keywordsPush} />}
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },
    skillWrap: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 30,
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
    keyword: {
        fontSize: 15,
        backgroundColor: '#d1d1d1',
        color: Colors.dark,
        paddingHorizontal: 13,
        paddingVertical: 8,
        borderRadius: 3,
        marginVertical: 8,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
    },
});