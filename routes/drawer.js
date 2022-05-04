import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AlbumOfTheWeekStack from './albumOfTheWeekStack';
import PlayScreenStack from './playScreenStack';
import InfoStack from './infoStack';
import RecordingStack from './recordingStack';
import { COLORS } from '../styles/colors';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
          
      <Drawer.Group screenOptions={{
                        headerStyle: { backgroundColor: COLORS.raDarker },
                        // headerTitleStyle: {
                        //     fontFamily: 'roboto-bold',
                        //   },
                        headerTintColor: COLORS.lightWhite,
                        height: 80,
                        headerTitleAlign: 'center',
                        backgroundColor: COLORS.raDarker
                    }}>
        <Drawer.Screen name="Home" component={PlayScreenStack} options={{ title: 'Player' }} />
        <Drawer.Screen name="RecordingStack" component={RecordingStack} 
            options={{ title: 'Nagrania' }} />
        <Drawer.Screen name="AlbumOfTheWeekStack" component={AlbumOfTheWeekStack} 
            options={{ title: 'Płyta tygodnia' }} />
        <Drawer.Screen name="Info" component={InfoStack} options={{ title: 'Informacje' }} />
        </Drawer.Group>
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}