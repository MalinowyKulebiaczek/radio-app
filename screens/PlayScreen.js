import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { Audio } from 'expo-av';

export default function PlayScreen() {
    const [radioPlays, setRadioPlays] = useState(false);
    const [playButtonTitle, setPlayButtonTitle] = useState('PLAY');
    const [sound, setSound] = React.useState();

    useEffect(() => {
        (async () => {
            console.log('status', radioPlays)
            if (!radioPlays) {
                setPlayButtonTitle(" ");
                const { sound } = await Audio.Sound.createAsync(
                    { uri: 'https://live.hunter.fm/80s_high' },
                    { shouldPlay: true, staysActiveInBackground: true }
                );
                setSound(sound);
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

    // React.useEffect(() => {
    //     return sound
    //         ? () => {
    //             console.log('Unloading Sound');
    //             sound.unloadAsync();
    //         }
    //         : undefined;
    // }, [sound]);

    return (
        <View style={globalStyles.centerContainer}>

            <TouchableOpacity
                onPress={() => setRadioPlays(!radioPlays)}
                style={styles.roundButton2}>
                <Text>{playButtonTitle}</Text>
            </TouchableOpacity>

            {/* <Text>Play Screen</Text>
            <Button title={playButtonTitle} onPress={() => setRadioPlays(!radioPlays)} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundButton1: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
    },
    roundButton2: {
        marginTop: 20,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#ccc',
    },
});


// -------------------------------- Garbage -------------------------

// import SoundPlayer from 'react-native-sound-player'

// import RadioPlayer, {
//     RadioPlayerEvents,
//     RadioPlayerMetadata,
// } from 'react-native-radio-player';
// async function playSound() {

    //     console.log('Loading Sound');

    //     await Audio.setAudioModeAsync({
    //         staysActiveInBackground: true,
    //         interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    //         shouldDuckAndroid: true,
    //         playThroughEarpieceAndroid: true,
    //         allowsRecordingIOS: true,
    //         interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //         playsInSilentModeIOS: true,
    //     });

    //     const { sound } = await Audio.Sound.createAsync(
    //         { uri: 'http://suaradio2.dyndns.ws:11004/stream' },
    //         { shouldPlay: true, staysActiveInBackground: true }
    //     );
    //     setSound(sound);

    //     console.log('Playing Sound');
    //     await sound.playAsync();
    // }