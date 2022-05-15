import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import CardWithImg from '../../shared/cardWithImg';

export default function Members({ navigation }) {
    

    const [members, setMembers] = useState([
        { name: 'Maurycy', surname: 'Jędrzejewski', id: '1', 
            urlImg: 'https://www.radioaktywne.pl/images/d/f/c/a/6/dfca6c4bf8e8f89d7567e2a166a187214cb463e8-6nbcwmhv4a8dixa.jpg', 
            mainAudition: '0 kultury' 
        },
        { name: 'Łukasz', surname: 'Kiciński', id: '2', 
            urlImg: 'https://www.radioaktywne.pl/images/f/9/8/f/b/f98fbab6f1554329f289bd2d672c213d3c7eabd4-rakolegium-3.jpg', 
            mainAudition: 'Aktywacja Piątkowa' 
        },
        { name: 'Łukasz', surname: 'Gnyszko', id: '3', 
            urlImg: 'https://www.radioaktywne.pl/images/1/6/8/9/2/168924ac953580363a35e447368d96b27f4a3bc6-rakolegium-4-cropped.jpg', 
            mainAudition: 'ScreenShot' 
        },
        { name: 'Anna', surname: 'Bobko', id: '4', 
            urlImg: 'https://www.radioaktywne.pl/images/6/c/c/2/e/6cc2e3fc5c3dff9333d4d6c63edbb21041045c5e-rakolegium-1-cropped.jpg', 
            mainAudition: 'Retro Disco' 
        },
        { name: 'Adam', surname: 'Smolarek', id: '5', 
            urlImg: 'https://www.radioaktywne.pl/images/4/8/7/1/1/48711210af292157eceec654d1069b39e81fd3eb-a0r5nd4cj6rvkgw.png', 
            mainAudition: 'Halo, Odbiór?' 
        },
        { name: 'Andrzej', surname: 'Krupa', id: '6', 
            urlImg: 'https://www.radioaktywne.pl/images/5/5/3/c/8/553c822506ccd66718329c4974b0ffbcdb1d1b15-ynhof2v4zlqgw6t.jpg', 
            mainAudition: 'Czwarty Wymiar' 
        },
        { name: 'Kinga', surname: 'Rodzik', id: '7', 
            urlImg: 'https://www.radioaktywne.pl/images/c/b/5/4/e/cb54e75326f8590f00ce2087b8f0283cde5dbd9f-4s72zgin6wpxmdk.jpg', 
            mainAudition: 'Miło mi to słyszeć' 
        },
        { name: 'Anna', surname: 'Dziubany', id: '8', 
            urlImg: 'https://www.radioaktywne.pl/images/6/a/c/a/4/6aca4893dd35fea09a4ef789e843dc16a45361ea-s4m7db6ahqoyzwl.jpg', 
            mainAudition: "Let's Play" 
        },
        { name: 'Karol', surname: 'Kępka', id: '9', 
            urlImg: 'https://www.radioaktywne.pl/images/a/e/1/d/9/ae1d94a316cb06f5429ba54fdddef8c96e6f71e7-v8chrs4ug2mzk0b.png', 
            mainAudition: "Let's Play" 
        },
        ])



    return (
        <View style={globalStyles.container}>
            <FlatList
                data={members}
                renderItem={({ item }) => (
                    <View>
                        {/* <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card> */}
                        <CardWithImg
                            title={item.name + ' ' + item.surname}
                            image={item.urlImg}
                            timeline={""}
                            author={item.mainAudition}>
                        </CardWithImg>
                    </View>
                )}
            />
        </View>
    )
}