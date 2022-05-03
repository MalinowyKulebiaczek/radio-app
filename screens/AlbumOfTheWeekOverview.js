import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AlbumOfTheWeekOverview({ navigation }) {
    const pressHandler = () => {
        navigation.push('AlbumDetails');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Album Of the week Overview</Text>
            <Button title='go to details' onPress={pressHandler} />
        </View>
    )
}