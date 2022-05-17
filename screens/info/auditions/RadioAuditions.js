import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../../styles/global';
import CardWithImg from '../../../shared/cardWithImg';
import { baseUrl } from '../../../shared/baseUrl';
import { COLORS } from '../../../styles/colors';

export default function RadioAudtions({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [auditions, setAuditions] = useState([])

    getAuditions = () => {
        console.log('Fetching: ' + baseUrl + '/auditions')
        fetch(baseUrl + '/auditions')
            .then((response) => response.json())
            .then((json) => setAuditions(json.auditions))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getAuditions();
    }, []);

    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen} /> :
                (
                    <FlatList
                        data={auditions}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('RadioAuditionDetails', item)}>
                                <CardWithImg
                                    title={item.title}
                                    image={item.urlImg}
                                    timeline={""}
                                    author={item.author}>
                                </CardWithImg>
                            </TouchableOpacity>
                        )}
                    />
                )
            }
        </View>
    )
}