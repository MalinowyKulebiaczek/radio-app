import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AlbumOfTheWeekDetails({ route }) {
    const item = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            <Text style={globalStyles.titleText}>{item.author}</Text>
        </View>
    )
}