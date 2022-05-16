import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { Audio } from 'expo-av';
import { COLORS } from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import BackgroundTimer from 'react-native-background-timer';
//import { Button } from 'react-native-web';



export default function TimerApp({ }) {

    const [secondsLeft, setSecondsLeft] = useState(181);
    const [timerOn, setTimerOn ] = useState(false);
    
    useEffect(()=> {
        if(timerOn) startTimer();
        else BackgroundTimer.stopBackgroundTimer();
        
        return() => {
            BackgroundTimer.stopBackgroundTimer();
        };
    }, [timerOn] );

    useEffect(()=>{
        if (secondsLeft===0){
            BackgroundTimer.stopBackgroundTimer();
        }
    }, [secondsLeft]);

    const startTimer = () => {
        BackgroundTimer.runBackgroundTimer(() => { 
            setSecondsLeft(secs => {
                if(secs>0) return secs = 1
                else return 0//code that will be called every 3 seconds 
            });
            }, 
            1000);
        }
    
    const clockify = ()=> {
        let minutes = Math.floor(secondsLeft/60);
        let seconds = Math.floor(secondsLeft%60);
        let displayMinutes = minutes <10 ? `0${minutes}`: minutes;
        let displaySeconds = seconds <10 ? `0${seconds}`: seconds;

        return{
            displayMinutes,
            displaySeconds,
        };
    };
        return (
            <View style={globalStyles.container}>
                <Text style={styles.timeText}>{clockify().displayMinutes} minutes 
                {clockify().displaySeconds} seconds</Text>
                <Button title= "Start/Stop" color="#6aba9c" onPress={()=>setTimerOn((current)=>!current)}></Button>
             </View>
        );

};
const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'roboto-bold',
        color: '#fff',//'#2c2c3a', 
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 15

    },

    timeText: {
        color: '#2c2c3a',
        textAlign: 'center',
        //justifyContent: 'center',
        fontSize: 30,
    },
})