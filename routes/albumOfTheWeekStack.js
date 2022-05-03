import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumOfTheWeekOverview from "../screens/AlbumOfTheWeekOverview";
import AlbumOfTheWeekDetails from "../screens/AlbumOfTheWeekDetails";

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='AlbumOfTheWeekOverview'>
                <Stack.Group
                    screenOptions={{
                        headerStyle: { backgroundColor: '#ddd' },
                        headerTintColor: '#444',
                        height: 80,
                        headerTitleStyle: {
                            fontWeight: 'roboto-bold',
                        },
                    }}>
                    <Stack.Screen
                        name='AlbumOfTheWeekOverview'
                        component={AlbumOfTheWeekOverview}
                        options={{ title: 'Płyta tygodnia' }}
                    />
                    <Stack.Screen
                        name='AlbumOfTheWeekDetails'
                        component={AlbumOfTheWeekDetails}
                        options={{ title: 'Płyta tygodnia - szczegóły' }}
                    />
                </Stack.Group>
            </Stack.Navigator>

        </NavigationContainer>
    );
}