import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AlbumOfTheWeekOverview() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Album Of the week Overview</Text>
        </View>
    )
}