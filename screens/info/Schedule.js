import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ActivityIndicator, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { globalStyles } from '../../styles/global';
import { COLORS } from '../../styles/colors';
import Card from '../../shared/card';
import { baseUrl } from '../../shared/baseUrl';

export default function Schedule({navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [schedule, setSchedule] = useState([])
    const [mondaySchedule, setMondaySchedule] = useState([])
    const [tuesdaySchedule, setTuesdaySchedule] = useState([])
    const [wednesdaySchedule, setWednesdaySchedule] = useState([])
    const [thursdaySchedule, setThursdaySchedule] = useState([])
    const [fridaySchedule, setFridaySchedule] = useState([])

    getSchedule = () => {
        console.log('Fetching: ' + baseUrl + '/radioschedule')
        fetch(baseUrl + '/radioschedule')
            .then((response) => response.json())
            .then((json) => {
                setSchedule(json.schedule)
                setMondaySchedule(json.schedule.Poniedzialek)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getSchedule();
    }, []);

    useEffect(() => {
        setMondaySchedule(schedule.Poniedzialek);
        setTuesdaySchedule(schedule.Wtorek);
        setWednesdaySchedule(schedule.Sroda);
        setThursdaySchedule(schedule.Czwartek);
        setFridaySchedule(schedule.Piatek);
        console.log(mondaySchedule);
    }, [schedule]);

    return (
        <View style={styles.centerContainerLight}>
            <ScrollView>
                <View >
                    <Text style={globalStyles.titleText}> Poniedziałek</Text>
                    {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : (
                        mondaySchedule.map((item) => (<TouchableOpacity  key={item.title} onPress={() => navigation.navigate('RadioAuditionDetails', item)}><Card><Text>{item.hourStart + ' - ' + item.hourEnd + '   ' + item.title}</Text></Card></TouchableOpacity>))
                        )
                    }
                </View>
                <View>
                    <Text style={globalStyles.titleText}> Wtorek</Text>
                    {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : (
                        tuesdaySchedule.map((item) => (<TouchableOpacity  key={item.title} onPress={() => navigation.navigate('RadioAuditionDetails', item)}><Card><Text>{item.hourStart + ' - ' + item.hourEnd + '   ' + item.title}</Text></Card></TouchableOpacity>))
                        )
                    }
                </View>
                <View>
                    <Text style={globalStyles.titleText}> Środa</Text>
                    {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : (
                        wednesdaySchedule.map((item) => (<TouchableOpacity  key={item.title} onPress={() => navigation.navigate('RadioAuditionDetails', item)}><Card><Text>{item.hourStart + ' - ' + item.hourEnd + '   ' + item.title}</Text></Card></TouchableOpacity>))
                        )
                    }
                </View>
                <View>
                    <Text style={globalStyles.titleText}> Czwartek</Text>
                    {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : (
                        thursdaySchedule.map((item) => (<TouchableOpacity  key={item.title} onPress={() => navigation.navigate('RadioAuditionDetails', item)}><Card><Text>{item.hourStart + ' - ' + item.hourEnd + '   ' + item.title}</Text></Card></TouchableOpacity>))
                        )
                    }
                </View>
                <View>
                    <View><Text style={globalStyles.titleText}> Piątek</Text></View>
                    {isLoading ? <ActivityIndicator size="large" color={COLORS.raGreen} /> : (
                        fridaySchedule.map((item) => (<TouchableOpacity key={item.title} onPress={() => navigation.navigate('RadioAuditionDetails', item)}><Card><Text>{item.hourStart + ' - ' + item.hourEnd + '   ' + item.title}</Text></Card></TouchableOpacity>))
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    centerContainerLight: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',//'#3b3b4c',
        marginVertical: 6,
        width: width
    },
});