import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PlayScreen() {
    return (
        <View style={styles.container}>
            <Text>Play Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});