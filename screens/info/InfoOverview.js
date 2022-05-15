import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';

export default function InfoOverview({ navigation }) {
    const [subPages, setSubPages] = useState([
        { title: 'AboutUs', titleToShow: 'O nas', key: '1' },
        { title: 'Members', titleToShow: 'Radiowcy', key: '2' },
        { title: 'RadioAuditions', titleToShow: 'Audycje', key: '3' },
        { title: 'Schedule', titleToShow: 'Ramówka', key: '4' },
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={subPages}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.title, item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.titleToShow}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

