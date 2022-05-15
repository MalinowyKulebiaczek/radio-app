import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
            <View style={styles.imageContainer}>
            <TouchableOpacity
                style={styles.squareButton}>
                <Image style={styles.image} source={require('../assets/img/ra-logo-with-name.png')} />
            </TouchableOpacity>
                
            </View>
            <View>
                <Text style={styles.titleText}>  Teraz gramy:</Text>
                <Text style={styles.regularText}>Zespół - Tytuł utworu</Text>
                <Text style={styles.paddingText}>  </Text>
            </View>
            <TouchableOpacity
                onPress={() => setRadioPlays(!radioPlays)}
                style={styles.roundButton}>
                <Text style={styles.titleText} >{playButtonTitle}</Text>
            </TouchableOpacity>
            
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
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      //  flexDirection: 'row', //dodane
        borderRadius: 100,
        backgroundColor: '#6aba9c',
        borderColor: '#50af8c',
        // shadowOffset: { width: 5, height: 5},
        shadowColor: '#000', //#fff
        elevation: 5,
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },

    squareButton: {
            width: 250,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
            //borderRadius: 100,
            backgroundColor: '#3b3b4c',
            borderColor: '#3b3b4c',
            // shadowOffset: { width: 5, height: 5},
            shadowColor: '#000', //#fff
            elevation: 5,
            shadowOpacity: 0.4,
            shadowRadius: 10,
            padding: 20
    },
    
    imageContainer: {
        width: 250,
        height: 250,
        marginHorizontal: 30,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c2c3a', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10 
    },

    regularText: {
        fontSize: 16,
        //fontWeight: 'bold,
        color: '#2c2c3a', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },

    paddingText: {
        padding: 20,
    }
    
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