import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Audio } from 'expo-av';
import { COLORS } from '../../styles/colors';

export default function RecordingDetails({ route }) {
    const recording = route.params;
    const [radioPlays, setRadioPlays] = useState(true);
    const [playButtonTitle, setPlayButtonTitle] = useState('PLAY');
    const [sound, setSound] = React.useState();

    const [isLoadingStream, setIsLoadingStream] = useState(false);

    useEffect(() => {
        (async () => {
            console.log('status', radioPlays)

            if (!radioPlays) {
                setIsLoadingStream(true);
                const { sound } = await Audio.Sound.createAsync(
                    { uri: recording.url },
                    { shouldPlay: true, staysActiveInBackground: true }
                );

                // setting sound
                setSound(sound);
                setIsLoadingStream(false);
                setPlayButtonTitle("STOP");

                try {
                    await sound.playAsync()
                } catch (e) {
                    console.log(e)
                }
            } else {
                await sound.stopAsync()
                await sound.unloadAsync()
                setPlayButtonTitle("PLAY");
            }
        })()
    }, [radioPlays])

    return (
        <View style={globalStyles.centerContainerDark}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/img/ra-logo-with-name.png')} />
            </View>
            {isLoadingStream ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : <TouchableOpacity
                onPress={() => setRadioPlays(!radioPlays)}
                style={styles.roundButton}>
                <Text>{playButtonTitle}</Text>
            </TouchableOpacity>
            }
            <View style={styles.titleContainer}>
                <Text style={globalStyles.titleTextLight}>{recording.title}</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundButton: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: COLORS.raGreen,
        borderColor: COLORS.raGreenDark,
        // shadowOffset: { width: 5, height: 5},
        shadowColor: '#fff',
        elevation: 5,
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    imageContainer: {
        width: 200,
        height: 220,
        marginHorizontal: 30,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    titleContainer: {
        padding: 30
    }
});