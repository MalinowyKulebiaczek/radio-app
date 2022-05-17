import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { globalStyles } from '../../styles/global';

import Card from '../../shared/card';
import CardWithImg from '../../shared/cardWithImg';
import CardTutorial from '../../shared/cardTurorial';

export default function RecordingsOverview({ navigation }) {
    const [recordings, setRecordings] = useState([
        { id: '1', title: 'The Dames - wywiad w aktywacji środowej', info:'Wywiad z Piotrem Łubą - wokalistą sopockiej grupy The Dames. Rozmawialiśmy o przeszłości zespołu, teledyskach, i najnowszych planach. Rozmawiał: Tymek Gryszkalis | Realizacja i montaż: Mateusz Grzybicki' ,
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/87.the-dames-wywiad-w-aktywacji-srodowej/I1JbCiL7wxetvdu.ogg', urlImg: 'https://www.radioaktywne.pl/images/2/9/0/8/a/2908ad3a59b6d64c07bebd6bbdd153aed4fca338-qvxhxymhn0iknua.jpg' },
        { id: '2', title: 'Justyna Dobroć – wywiad w Aktywacji czwartkowej', info:'Wywiad z Justyną Dobroć - piosenkarką, solistką, artystką. Rozmawialiśmy m.in. o wpływie pandemii na muzykę, znaczeniu tekstów czy kobiecej solidarności. Rozmawiała Sylwia Afeltowicz. Realizowała i montowała Daria Kałowska.',
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/86.justyna-dobroc-wywiad-w-aktywacji-czwartkowej/MQsFhfPRTDvHn83.ogg', urlImg:'https://www.radioaktywne.pl/images/0/c/6/0/6/0c606c599d0931ee7a9d35841cc639472acbe8b4-yhqicln2muc4kbw.jpg'},
        { id: '3', title: 'Bałtyk i Adam Karol (Polska z Offu) - wywiad w Aktywacji wtorkowej', info:'Rozmowa z Michałem Rutkowskim (Bałtyk) oraz Adamem Karolem Drozdowskim (Polska z Offu) na temat koncertu Bałtyk x Mapa, który odbył się w Ośrodku Kultury Ochoty OKO 8 kwietnia 2022 roku. Realizował Michał Daniluk. Rozmawiał i montował Adam Smolarek.',
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/85.baltyk-i-adam-karol-drozdowski-polska-z-offu-wywiad-w-aktywacji-wtorkowej/2zEodgqiau941Ov.ogg',urlImg:'https://www.radioaktywne.pl/images/b/2/7/f/9/b27f9116f7a854a319b0c9c7db18b8592ea5f6da-edbpzfihkgeajgn.png'},
        { id: '4', title: 'ParaNoise – wywiad w Aktywacji czwartkowej', info:'Wywiad z podhalańskim zespołem ParaNoise, grającym w klimatach pop-punku i neo-grungeu. Rozmawialiśmy m.in. o nazwie zespołu, muzyce czy tekstach. Rozmawiała Maja Jaworska. Realizowała i montowała Daria Kałowska.',
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/83.paranoise-wywiad-w-aktywacji-czwartkowej/LEXDrN5HeWZvYKw.ogg', urlImg: 'https://www.radioaktywne.pl/images/e/d/f/a/7/edfa7eb3affd8bb149609a6e70b331847f4ac91e-stemabsxc1ub5pv.jpg'},
        { id: '5', title: 'jan bąk & bogdan sėkalski - wywiad w Tygodniku Muzycznym', info:'Wywiad z Janem Bąkiem i bogdanem sėkalskim na temat ich ostatniego albumu pod tytułem "Śpij już stary". To emocjonalna płyta o akceptacji przemijania, która tworzy słodkogorzki obraz tęsknoty za dzieciństwem i postacią ojca. Muzycy podczas rozmowy opowiedzieli o koncepcie albumu i opisali swoje inspiracje. Wywiad poprowadził Łukasz Kiciński. Realizacja i montaż: Kuba Szczepaniak',
            url: 'https://www.radioaktywne.pl/user/pages/03.nagrania/82.jan-bak-and-bogdan-s-kalski-wywiad-w-tygodniku-muzycznym/ebsnMKINGtumhlx.ogg',urlImg: 'https://www.radioaktywne.pl/images/b/3/5/6/1/b3561985cb929971286ef0256a948dfab451ecd6-tq3mlc05zrmpakc.jpg'},
    ])


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={recordings}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('RecordingDetails', item)}>
                        <CardWithImg
                            style ={globalStyles.container} 
                            title={item.title}
                            image={item.urlImg}
                            // timeline={"23.04.2022 - 30.04.2022"}
                            // author={item.author}
                            >
                        </CardWithImg>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
    
}

