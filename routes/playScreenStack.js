import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayScreen from '../screens/PlayScreen';

const playScreenStack = createNativeStackNavigator();

export default function Navigator() {
    return (
        
            <playScreenStack.Navigator initialRouteName='AlbumOfTheWeekOverview'>
                <playScreenStack.Group
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <playScreenStack.Screen
                        name='PlayScreen'
                        component={PlayScreen}
                        options={{ title: 'Radio aktywne' }}
                    />
                </playScreenStack.Group>
            </playScreenStack.Navigator>
       
    );
}