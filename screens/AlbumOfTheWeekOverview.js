import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import { COLORS } from '../styles/colors';
import { baseUrl } from '../shared/baseUrl';
import Card from '../shared/card';
import CardWithImg from '../shared/cardWithImg';

export default function AlbumOfTheWeekOverview({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [albums, setAlbums] = useState([])

    getAlbums = () => {
        console.log('Fetching: ' + baseUrl + '/albums')
        fetch(baseUrl + '/albums')
            .then((response) => response.json())
            .then((json) => setAlbums(json.albums))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getAlbums();
    }, []);

    const pressHandler = () => {
        navigation.push('AlbumOfTheWeekDetails');
    }

    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen} /> :
                (
                    <FlatList
                        data={albums}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('AlbumOfTheWeekDetails', item)}>
                                <CardWithImg
                                    style={globalStyles.container}
                                    title={item.title}
                                    image={item.urlImg}
                                    timeline={item.timelineStart + ' - ' + item.timelineEnd}
                                    author={item.author}>
                                </CardWithImg>
                            </TouchableOpacity>
                        )}
                    />)
            }
        </View>
    )
}