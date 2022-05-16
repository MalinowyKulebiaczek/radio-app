import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../../styles/global';
import { COLORS } from '../../styles/colors';
import CardWithImg from '../../shared/cardWithImg';
import { baseUrl } from '../../shared/baseUrl';

export default function Members({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [members, setMembers] = useState([])

    getUsers = () => {
        console.log('Fetching: ' + baseUrl + '/members')
        fetch(baseUrl + '/members')
            .then((response) => response.json())
            .then((json) => setMembers(json.members))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getUsers();
      }, []);

    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen}/> :
                (
                    <FlatList
                        data={members}
                        renderItem={({ item }) => (
                            <View>
                                <CardWithImg
                                    title={item.name + ' ' + item.surname}
                                    image={item.urlImg}
                                    timeline={""}
                                    author={item.mainAudition}>
                                </CardWithImg>
                            </View>
                        )}
                    />
                )
            }
        </View>
    )
}