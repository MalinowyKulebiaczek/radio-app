import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Audio } from 'expo-av';
import { COLORS } from '../../styles/colors';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Slider } from '@miblanchard/react-native-slider';

const startButton = () => {
    return <MaterialIcons name="play-arrow" size={40} color={COLORS.lightWhite} />;
};
const stopButton = () => {
    return <MaterialIcons name="stop" size={40} color={COLORS.lightWhite} />;
};


export default function RecordingDetails({ route }) {
    const recording = route.params;
    const [radioPlays, setRadioPlays] = useState(true);
    const [playButtonTitle, setPlayButtonTitle] = useState(startButton);
    const [sound, setSound] = React.useState();
    const [isLoadingStream, setIsLoadingStream] = useState(false);
    const openAlert = () => {
        Alert.alert('Opis', recording.info, [{ text: 'OK' }]);
    }

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
                    // console.log(e)
                }
            } else {
                try {
                    
                        await sound.stopAsync()
                        await sound.unloadAsync()
                        setPlayButtonTitle(startButton);               
                } catch (e) {
                    // console.log(e)
                }

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
                <Text style={globalStyles.titleText}>{recording.title}</Text>
                <TouchableOpacity style={styles.textContainer}>
                    <Ionicons name="ios-information-circle-sharp" size={35} color={COLORS.raDark} onPress={openAlert} />
                    <Text style={styles.textGap}>Zobacz opis</Text>
                </TouchableOpacity>
            </View>
            {isLoadingStream ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : <TouchableOpacity
                onPress={() => setRadioPlays(!radioPlays)}
                style={styles.roundButton}>
                <Text>{playButtonTitle}</Text>
            </TouchableOpacity>
            }
            <View style={styles.textContainer}>
                <Slider style={styles.icon}
                    value={0}
                    minimumValue={0}
                    maximumValue={100}
                    height={50}
                    width={250}
                    thumbTintColor={COLORS.raDarker}
                    >
                </Slider>
                <Text>   </Text>
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
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: COLORS.raGreen,
        borderColor: COLORS.raGreenDark,
        // shadowOffset: { width: 5, height: 5},
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        marginVertical: 20
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
        padding: 20,
        //flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textContainer: {
        padding: 15,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //marginLeft: 10,
        //marginBottom: 20,
        //marginRight: 15,
    },
    textGap: {
        marginRight: 10,
        marginLeft: 10,
    }

});