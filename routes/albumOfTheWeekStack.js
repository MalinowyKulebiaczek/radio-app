import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumOfTheWeekOverview from "../screens/AlbumOfTheWeekOverview";
import AlbumOfTheWeekDetails from "../screens/AlbumOfTheWeekDetails";

// const { Navigator, Screen } = createStackNavigator();

const Stack = createNativeStackNavigator();

// export const albumOfTheWeekStack = () => (
//   <Navigator
//     headerMode='screen'
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#eee',
//       },
//       headerTintColor: '#444',
//       height: 60
//     }}
//   >
//     <Screen
//       name='AlbumOfTheWeekOverview'
//       component={AlbumOfTheWeekOverview}
//       options={{ title: 'Płyta tygodnia' }}
//     />
//     <Screen
//       name='AlbumOfTheWeekDetails'
//       component={AlbumOfTheWeekDetails}
//       options={{ title: 'Płyta tygodnia - szczegóły' }}
//     />
//   </Navigator>
// );

// export default albumOfTheWeekStack;

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