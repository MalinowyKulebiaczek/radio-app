import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function AlbumOfTheWeekOverview({ navigation }) {
    const [albums, setAlbums] = useState([
        { title: 'Master Of Puppets', author: 'Metallica', key: '1' },
        { title: 'Ride The Ligthning', author: 'Metallica', key: '2' },
        { title: 'Naturalnie', author: 'Stacja Folk', key: '3' },
        { title: 'Kind of Blue', author: 'Miles Davis', key: '4' },
        { title: 'Couldnt Stand the Weather', author: 'Stevie Ray Vaughan', key: '5' },
    ])


    const pressHandler = () => {
        navigation.push('AlbumOfTheWeekDetails');
    }

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('AlbumOfTheWeekDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}