import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AlbumOfTheWeekDetails() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Album Of the week details</Text>
        </View>
    )
}