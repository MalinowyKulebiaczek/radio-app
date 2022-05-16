import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Audio } from 'expo-av';
import { COLORS } from '../../styles/colors';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const startButton = () => {
    return <MaterialIcons name="play-arrow" size={40} color={COLORS.lightWhite}/>;
  };
  const stopButton = () => {
    return <MaterialIcons name="stop" size={40} color={COLORS.lightWhite}/>;
  };


export default function RecordingDetails({ route }) {
    const recording = route.params;
    const [radioPlays, setRadioPlays] = useState(true);
    const [playButtonTitle, setPlayButtonTitle] = useState(startButton);
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
        <View style={globalStyles.centerContainerLight}>
            <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.icon}>
                    <MaterialCommunityIcons name="microphone-variant" size={110} color={COLORS.raDark} />
            </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text> </Text>
                <Text style={globalStyles.titleText}>{recording.title}</Text>
            </View>
            <View style={styles.titleContainer}>
            </View>
            {isLoadingStream ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : <TouchableOpacity
                onPress={() => setRadioPlays(!radioPlays)}
                style={styles.roundButton}>
                <Text>{playButtonTitle}</Text>
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
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: COLORS.raGreen,
        borderColor: COLORS.raGreenDark,
        // shadowOffset: { width: 5, height: 5},
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        //marginVertical: 20 
    },
    squareButton: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b3b4c',
        borderColor: '#3b3b4c',
        // shadowOffset: { width: 5, height: 5},
        shadowColor: '#000', 
        elevation: 5,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        padding: 20,
        marginHorizontal: -20 //?
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
    icon: {
        width: 200,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    titleContainer: {
        padding: 30
    },

});