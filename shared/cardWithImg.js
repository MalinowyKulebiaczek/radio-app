import React, { useEffect } from "react";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";

export default function Card({ title, author, image, timeline}) {
    
    return (
        <> 
            <View style={styles.card}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.cardImage}>
                        <Image
                            style = {{width: "100%", height: "100%",}}
                            source={{uri:image}}
                        />
                    </View>
                    <View style={{ flex: 0.6, marginHorizontal: 12, overflow: "hidden" }}>
                        <Text style={styles.cardTitle}>{title}</Text>
                        
                        <Text style={styles.cardDescription}>{author}</Text>
                        <Text style={styles.cardTimeline}>{timeline}</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: width-40,
        borderRadius: 5,

        height: height / 8,

        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },

    cardTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10,
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
    },

    cardImage: {
        flex: 0.3,
        // height: height / 8,
        // width: 30,
  
    },

});