import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Audio } from 'expo-av';

import SoundPlayer from 'react-native-sound-player'

import RadioPlayer, {
    RadioPlayerEvents,
    RadioPlayerMetadata,
} from 'react-native-radio-player';


export default function PlayScreen() {

    // const metadataSeparator = "-"; // Used to split artist and title in stream metadata
    // // RadioPlayer.radioURLWithMetadataSeparator('https://live.hunter.fm/80s_high', metadataSeparator);
    // RadioPlayer.radioURL('https://live.hunter.fm/80s_high')
    // // RadioPlayer.stop();
    // // RadioPlayer.play();

    // // State: error, stopped, playing, paused, buffering
    // RadioPlayerEvents.addEventListener('stateDidChange', (event) => {
    //     console.log(event.state);
    // });
    // // Metadata: {"artistName": "Example Artist", "trackName": "Example Title"}
    // RadioPlayerEvents.addListener('MetadataDidChange', (metadata) => {
    //     console.log(`Artist: ${metadata.artistName}`);
    //     console.log(`Title: ${metadata.trackName}`);
    // });
    const [radioPlays, setRadioPlays] = useState(false);

    // const setupAudioPlayer = () =>
    //     async () => {
    //         try {
    //             await Audio.setAudioModeAsync({
    //                 staysActiveInBackground: true,
    //                 interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    //                 shouldDuckAndroid: true,
    //                 playThroughEarpieceAndroid: true,
    //                 allowsRecordingIOS: true,
    //                 interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    //                 playsInSilentModeIOS: true,
    //             });

    //             let soundObject = await Audio.Sound.createAsync(
    //                 { uri: 'http://suaradio2.dyndns.ws:11004/stream' },
    //                 { shouldPlay: true, staysActiveInBackground: true }
    //             );

    //             await this.soundObject.playAsync();
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }


    const [sound, setSound] = React.useState();

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

    useEffect(() => {
        (async () => {
            console.log('status', radioPlays)
            if (!radioPlays) {
                const { sound } = await Audio.Sound.createAsync(
                    { uri: 'https://live.hunter.fm/80s_high' },
                    { shouldPlay: true, staysActiveInBackground: true }
                );
                setSound(sound);

                try {
                    await sound.playAsync()
                } catch (e) {
                    console.log(e)
                }
            } else {
                await sound.stopAsync()
                await sound.unloadAsync()
            }
        })()
    }, [radioPlays])

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    // const clickHandler = () => {
    //     if (radioPlays) {
    //         // RadioPlayer.stop();
    //         setRadioPlays(false)
    //     } else {
    //         // RadioPlayer.play();
    //         setRadioPlays(true)
    //         // SoundPlayer.playUrl('https://live.hunter.fm/80s_high')
    //         setupAudioPlayer()
    //     }
    // }

    return (
        <View style={globalStyles.container}>
            <Text>Play Screen</Text>
            <Button title='play' onPress={() => setRadioPlays(!radioPlays)} />
        </View>
    )
}