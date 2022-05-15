import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';

export default function RecordingsOverview({ navigation }) {
    const [recordings, setRecordings] = useState([
        { id: '1', title: 'The Dames - wywiad w aktywacji środowej',  
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/87.the-dames-wywiad-w-aktywacji-srodowej/I1JbCiL7wxetvdu.ogg', },
        { id: '2', title: 'Justyna Dobroć – wywiad w Aktywacji czwartkowej', 
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/86.justyna-dobroc-wywiad-w-aktywacji-czwartkowej/MQsFhfPRTDvHn83.ogg'},
        { id: '3', title: 'Bałtyk i Adam Karol (Polska z Offu) - wywiad w Aktywacji wtorkowej', 
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/85.baltyk-i-adam-karol-drozdowski-polska-z-offu-wywiad-w-aktywacji-wtorkowej/2zEodgqiau941Ov.ogg'},
        { id: '4', title: 'ParaNoise – wywiad w Aktywacji czwartkowej', 
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/83.paranoise-wywiad-w-aktywacji-czwartkowej/LEXDrN5HeWZvYKw.ogg'},
        { id: '5', title: 'jan bąk & bogdan sėkalski - wywiad w Tygodniku Muzycznym', 
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/82.jan-bak-and-bogdan-s-kalski-wywiad-w-tygodniku-muzycznym/ebsnMKINGtumhlx.ogg'},
    ])


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={recordings}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('RecordingDetails', item)}>
                        <Card>
                            <Text style={globalStyles.paragraph}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
    
}