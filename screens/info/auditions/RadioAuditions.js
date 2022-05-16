import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/global';
import CardWithImg from '../../../shared/cardWithImg';

export default function RadioAudtions({ navigation }) {
    

    const [auditions, setAuditions] = useState([
        { title: '0 kultury', author: 'Maurycy Jędrzejewski', id: '1', 
            urlImg: 'https://www.radioaktywne.pl/images/5/b/2/3/c/5b23c8f72a8badca32614e030d1959bdddeb5e10-u815wgo7d6ycnph.jpeg', 
            description: 'Lubicie dobrą muzykę? Niestety, nie jest to odpowiednia audycja. Jeśli jednak jakimś cudem spodoba się Wam jakiś kawałek puszczony w ramach "0 kultury", to zaciekawi Was też może historia artysty odpowiedzialnego za dany utwór. Na to wszystko i jeszcze więcej zaprasza co tydzień Maurycy Jędrzejewski.' 
        },
        { title: 'Aktyrave', author: 'Tymoteusz Gryszkalis', id: '2', 
            urlImg: 'https://www.radioaktywne.pl/images/d/3/8/3/3/d3833c870ed4f2a08d498e3c6709c3893f8f29ad-vuxe2qjrvmfoq1w.jpg', 
            description: 'Audycja, w której rozkładamy polską i światową scenę rave na czynniki pierwsze. Najlepsza, najcięższa muzyka elektroniczna po tej stronie Wisły. Jeżeli lubicie techno, hardcore, hardtrance, a także inne podziemne gatunki poczujecie się tu jak w domu. Oprócz tego wywiady, historie, poradniki i wszystko co chcecie wiedzieć o świecie, przed którym zawsze przestrzegali Was rodzice.' 
        },
        { title: 'Aktywacja', author: 'Łukasz Kiciński', id: '3', 
            urlImg: 'https://www.radioaktywne.pl/images/9/6/4/a/7/964a7773c3b3a6904b4c1728086153874b26db1f-kz8gzulsvwccq40.png', 
            description: 'Studencki serwis informacyjny z ogromną dawką najciekawszych newsów z Warszawy, którego centralnym punktem jest wywiad z twórcami przeróżnych inicjatyw.' 
        },
        { title: 'Biurko', author: 'Tomasz Kubik', id: '4', 
            urlImg: 'https://www.radioaktywne.pl/images/f/f/4/3/4/ff434db960ba97abfff04bbb9ed0b4043a9d171b-cfh0kkxisr46elt.png', 
            description: 'Audycja miniaturka, ale stworzona z przyjaźni i pasji dwóch redaktorów - Tomasza Kubika i Macieja Wałejki. Co tydzień od 21:00 do 21:30, pomiędzy swoimi autorskimi audycjami, gaworzą i prezentują specjalne utwory, które nie pomieściłyby się w ich zwyczajnych audycjach. Często z uśmiechem i puszczeniem oka do słuchaczy, kulturalnie per pan, opowiadają o otaczającym świecie, nie tylko muzycznym. Czasem zdarzy się porozmawiać o ostatnich wydarzeniach związanych z klubem, którego jeden z panów jest zagorzałym fanem, a drugi z panów ma kartę kibica, choć nigdy na meczu nie był, ale dumnie używa jej jako karty miejskiej. Tak to właśnie u panów Redaktorów przekornie bywa. Co zrobić? Posłuchać i uśmiechnąć się do radioodbiornika.' 
        },  
        ])



    return (
        <View style={globalStyles.container}>
            <FlatList
                data={auditions}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('RadioAuditionDetails', item)}>
                        {/* <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card> */}
                        <CardWithImg
                            title={item.title}
                            image={item.urlImg}
                            timeline={""}
                            author={item.author}>
                        </CardWithImg>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}