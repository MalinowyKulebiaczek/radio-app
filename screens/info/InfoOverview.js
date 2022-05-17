import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import CardTutorial from '../../shared/cardTurorial';


export default function InfoOverview({ navigation }) {
    const [subPages, setSubPages] = useState([
        { title: 'AboutUs', titleToShow: 'O nas', key: '1', urlImg:'https://www.radioaktywne.pl/images/1/2/7/2/e/1272e6e329ce3e1773f09e6742d722267eaa0644-dv6r25xmj78c9yi.png', about: 'Czym jest Radio Aktywne?' },
        { title: 'Members', titleToShow: 'Radiowcy', key: '2', urlImg:'https://www.radioaktywne.pl/images/4/b/5/3/c/4b53c1409a02bfa76abd4d3ee84c756e7758744e-rakolegium-18-cropped-2.jpg', about: 'Poznaj członków radia' }, 
        { title: 'RadioAuditions', titleToShow: 'Audycje', key: '3', urlImg:'https://www.radioaktywne.pl/images/c/d/5/a/e/cd5ae47ffe5986588b0c3ed21577dee5c1e872bc-h6mweuh4oa8dpzm.jpg', about: 'Nasze audycje' },
        { title: 'Schedule', titleToShow: 'Ramówka', key: '4' , urlImg:'https://www.radioaktywne.pl/images/b/f/9/a/1/bf9a16182276cb4e3e1ecf4df1d3065f0fdc1407-gzem27y3raxk8dw.jpg', about: 'Co to jest grane?' },
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={subPages}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.title, item)}>
                        <CardTutorial
                            image={item.urlImg}
                            title={item.titleToShow}
                            about={item.about}
                            >
                        </CardTutorial>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

// {/* <CardWithImg
//                             style ={globalStyles.container} 
//                             title={item.title}
//                             image={item.urlImg}
//                             timeline={"23.04.2022 - 30.04.2022"}
//                             author={item.author}>
//                         </CardWithImg> */}