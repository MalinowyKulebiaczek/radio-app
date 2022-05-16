import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { Audio } from 'expo-av';
import { COLORS } from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import BackgroundTimer from 'react-native-background-timer';

const startButton = () => {
    return <MaterialIcons name="play-arrow" size={40} color={COLORS.lightWhite}/>;
  };
  const stopButton = () => {
    return <MaterialIcons name="stop" size={40} color={COLORS.lightWhite}/>;
  };

export default function PlayScreen() {
    const [radioPlays, setRadioPlays] = useState(true);
    const [playButtonTitle, setPlayButtonTitle] = useState(startButton);
    const [sound, setSound] = React.useState();

    const [isLoadingStream, setIsLoadingStream] = useState(false);

    const streamURL = 'https://listen.radioaktywne.pl:8443/raogg';
    const metaDataURL = 'https://listen.radioaktywne.pl:8443/status-json.xsl';
    const [metaData, setMetaData] = useState({});
   
    useEffect(() => {
        (async () => {
            console.log('status', radioPlays)
            // TODO create some generic component for fetching
            fetch(metaDataURL)
                .then((response) => response.json())
                .then((json) => setMetaData(json.icestats.source[0]));

            if (!radioPlays) {
                setIsLoadingStream(true);
                const { sound } = await Audio.Sound.createAsync(
                    { uri: streamURL },
                    { shouldPlay: true, staysActiveInBackground: true }
                );

                // setting sound
                setSound(sound);
                setIsLoadingStream(false);
                setPlayButtonTitle(stopButton);

                try {
                    await sound.playAsync()
                } catch (e) {
                    console.log(e)
                }
            } else {
                await sound.stopAsync()
                await sound.unloadAsync()
                setPlayButtonTitle(startButton);
            }
        })()
    }, [radioPlays])

    return (
        <View style={globalStyles.centerContainerDark}>
            <View style={styles.imageContainer}>
            <TouchableOpacity
                style={styles.squareButton}>
                <Image style={styles.image} source={require('../assets/img/ra-logo-with-name.png')} />
            </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.paddingText}>  </Text>
                {/* <Text style={styles.titleText}>Teraz gramy:</Text> */}
                <Text style={styles.regularText}>{metaData.title}</Text>
                <Text style={styles.paddingText}>  </Text>
            </View>
            {isLoadingStream ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : <TouchableOpacity
                onPress={() => setRadioPlays(!radioPlays)}
                style={styles.roundButton}>
                <Text style={styles.titleText} >{playButtonTitle}</Text>
            </TouchableOpacity>
            }
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
        backgroundColor: COLORS.raGreen,
        borderColor: COLORS.raGreenDark,
        // shadowOffset: { width: 5, height: 5},
        shadowColor: '#000', //#fff
        elevation: 5,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        marginTop: 50
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
        //fontFamily: 'roboto-bold',
        color: '#fff',//'#2c2c3a', 
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 15 
    },

    regularText: {
        fontSize: 16,
        color: '#fff', //'#2c2c3a', 
        justifyContent: 'center',
        alignItems: 'stretch',
        marginBottom: 10,
        padding: 5
    },

    paddingText: {
        padding: 10,
    },
    titleContainer: {
        padding: 30
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