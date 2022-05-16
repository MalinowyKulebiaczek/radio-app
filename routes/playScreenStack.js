import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayScreen from '../screens/PlayScreen';
import { COLORS } from '../styles/colors';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import TimerApp from '../screens/TimerApp';

const playScreenStack = createNativeStackNavigator();

export default function Navigator({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
      }
    return (
        
            <playScreenStack.Navigator initialRouteName='AlbumOfTheWeekOverview'>
                <playScreenStack.Group
                    screenOptions={{
                        
                    }}>
                    <playScreenStack.Screen
                        name='PlayScreen'
                        component={PlayScreen}
                        options={{
                            title: 'Player',
                            headerLeft: () => (
                            <MaterialIcons name="menu" size={28} color={COLORS.lightWhite} onPress={openMenu} />
                            ),
                            headerRight: () => (
                                <Ionicons name="md-timer-outline" size={28} color={COLORS.lightWhite} onPress={()=>navigation.navigate('TimerApp')} />
                            ),
                            headerTitleAlign: 'center',
                            headerStyle: { backgroundColor: COLORS.raDarker },
                            headerTintColor: COLORS.lightWhite,
                            backgroundColor: COLORS.raDarker,
                            headerTitleAlign: 'center',
                         }}
                    />
                    <playScreenStack.Screen
                        name='TimerApp'
                        component={TimerApp}
                        options={{
                            title: 'Timer',
                            headerLeft: () => (
                            <MaterialIcons name="menu" size={28} color={COLORS.lightWhite} onPress={openMenu} />
                            ),
                            headerTitleAlign: 'center',
                            headerStyle: { backgroundColor: COLORS.raDarker },
                            headerTintColor: COLORS.lightWhite,
                            backgroundColor: COLORS.raDarker,
                            headerTitleAlign: 'center',
                         }}
                    />
                </playScreenStack.Group>
            </playScreenStack.Navigator>
       
    );
}