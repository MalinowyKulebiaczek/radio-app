import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function AboutUs() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>O nas</Text>
        </View>
    )
}