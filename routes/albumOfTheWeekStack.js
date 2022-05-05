import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumOfTheWeekOverview from "../screens/AlbumOfTheWeekOverview";
import AlbumOfTheWeekDetails from "../screens/AlbumOfTheWeekDetails";

const albumOfTheWeekStack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <albumOfTheWeekStack.Navigator initialRouteName='AlbumOfTheWeekOverview'>
            <albumOfTheWeekStack.Group
            // screenOptions={{
            //     headerStyle: { backgroundColor: '#ddd' },
            //     headerTintColor: '#444',
            //     height: 80,
            //     headerTitleStyle: {
            //         fontWeight: 'roboto-bold',
            //     },
            // }}
            >
                <albumOfTheWeekStack.Screen
                    name='AlbumOfTheWeekOverview'
                    component={AlbumOfTheWeekOverview}
                    options={{
                        title: 'Płyta tygodnia',
                        headerShown: false,
                    }}
                />
                <albumOfTheWeekStack.Screen
                    name='AlbumOfTheWeekDetails'
                    component={AlbumOfTheWeekDetails}
                    options={{
                        title: 'Płyta tygodnia - szczegóły',
                        headerShown: false,
                    }}
                />
            </albumOfTheWeekStack.Group>
        </albumOfTheWeekStack.Navigator>
    );
}