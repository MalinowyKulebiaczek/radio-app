import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AlbumOfTheWeekDetails({ route }) {
    const item = route.params;
    return (
        <ScrollView>
            <View style={globalStyles.container}>
            <View style={globalStyles.centerContainerLight}>
                <Image
                    style={styles.imageContainer}
                    source={{ uri: item.urlImg }}
                />
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <Text style={globalStyles.paragraph}>{item.author}</Text>
            </View>
            <Text style={globalStyles.paragraph}>{item.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({ //TODO ogarnac zeby zawsze wyswietlal sie elegancki kwadrat i nie bylo zahardcodowane
    imageContainer: {
        width:  300,
        height: 300,
        marginHorizontal: 10,
        marginVertical: 5,
    },
})