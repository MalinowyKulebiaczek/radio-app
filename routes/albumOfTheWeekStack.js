import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumOfTheWeekOverview from "../screens/AlbumOfTheWeekOverview";
import AlbumOfTheWeekDetails from "../screens/AlbumOfTheWeekDetails";
import { COLORS } from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';

const albumOfTheWeekStack = createNativeStackNavigator();

export default function Navigator({navigation}) {
    const openMenu = () => {
        navigation.openDrawer();
      }

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
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.raDarker },
                headerTitleStyle: { color: "#fff" },
                headerTitleAlign: 'center',
                headerTintColor: COLORS.lightWhite,
                backgroundColor: COLORS.raDarker,
            }}
            >
                <albumOfTheWeekStack.Screen
                    name='AlbumOfTheWeekOverview'
                    component={AlbumOfTheWeekOverview}
                    options={{
                        title: 'Płyta tygodnia',
                        headerLeft: () => (
                        <MaterialIcons name="menu" size={28} color={COLORS.lightWhite} onPress={openMenu} />
                        ),
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: COLORS.raDarker },
                        headerTintColor: COLORS.lightWhite,
                        backgroundColor: COLORS.raDarker,
                     }}
                />
                <albumOfTheWeekStack.Screen
                    name='AlbumOfTheWeekDetails'
                    component={AlbumOfTheWeekDetails}
                    options={{
                        title: 'Płyta tygodnia'
                    }}
                />
            </albumOfTheWeekStack.Group>
        </albumOfTheWeekStack.Navigator>
    );
}