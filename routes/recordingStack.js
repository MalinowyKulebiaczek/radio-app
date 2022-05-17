import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordingDetails from "../screens/recordings/RecordingDetails";
import RecordingsOverview from "../screens/recordings/RecordingsOverview";
import { COLORS } from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';

const recordingsStack = createNativeStackNavigator();



export default function Navigator({navigation}) {
    const openMenu = () => {
        navigation.openDrawer();
      }
    return (
        <recordingsStack.Navigator initialRouteName='RecordingsOverview'>
            <recordingsStack.Group
            screenOptions={{
                        
                    }}>
                        
                <recordingsStack.Screen
                    name='RecordingsOverview'
                    component={RecordingsOverview}
                    options={{
                        title: 'Nagrania',
                        headerLeft: () => (
                        <MaterialIcons name="menu" size={28} color={COLORS.lightWhite} onPress={openMenu} />
                        ),
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: COLORS.raDarker },
                        headerTintColor: COLORS.lightWhite,
                        backgroundColor: COLORS.raDarker,
                        
                     }}
                />
                <recordingsStack.Screen
                    name='RecordingDetails'
                    component={RecordingDetails}
                    options={{
                        title: 'Nagrania',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: COLORS.raDarker },
                        headerTintColor: COLORS.lightWhite,
                        backgroundColor: COLORS.raDarker,
                    }}
                />
               
            </recordingsStack.Group>
        </recordingsStack.Navigator>
    );
}