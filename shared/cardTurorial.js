import { DrawerItem } from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function CardTutorial({image, title, about}) {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{uri:image}}
                />
            </View>
            <View style={{ flex: 0.6, marginHorizontal: 12, marginVertical: 8, overflow: "hidden" }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{about}</Text>
                {/* <Text style={styles.cardDescription}>{author}</Text>
                <Text style={styles.cardTimeline}>{timeline}</Text> */}
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({

    cardContainer: {
        width: width - 40, 
        backgroundColor:'#fff',
        height: 215,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowOpacity: 0.5,
        elevation: 5,
        marginBottom: 10,
        },

    cardTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
        color: '#000',
    },

    cardTimeline: {
        fontSize: 11.5,
        color: "#777",
        marginLeft: 10,
        marginVertical: 8
    },

    cardDescription: {
        fontSize: 12,
        marginLeft: 10,
        color: '#000',
    },

    cardImage: {
        flex: 0.3,
    },
    imageStyle: {
        height: 130,
        width: width-40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.9,
    },

    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },

});