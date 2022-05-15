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
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.raDarker,
          shadowColor: COLORS.lightWhite,
        },
        drawerLabelStyle:{
          color: COLORS.lightWhite
        },
        drawerActiveBackgroundColor: COLORS.raDark
      }}        
      >
        <Drawer.Group screenOptions={{
          headerStyle: { backgroundColor: COLORS.raDarker },
          // headerTitleStyle: {
          //     fontFamily: 'roboto-bold',
          //   },
          headerTintColor: COLORS.lightWhite,
          height: 80,
          headerTitleAlign: 'center',
          backgroundColor: COLORS.raDarker
        }}

        >
          <Drawer.Screen name="Home" component={PlayScreenStack} options={{ title: 'Player', headerShown: false }} />
          <Drawer.Screen name="RecordingStack" component={RecordingStack}
            options={{ title: 'Nagrania', headerShown: false }} />
          <Drawer.Screen name="AlbumOfTheWeekStack" component={AlbumOfTheWeekStack}
            options={{ title: 'Płyta tygodnia', headerShown: false }} />
          <Drawer.Screen name="Info" component={InfoStack} options={{ title: 'Informacje', headerShown: false }} />
        </Drawer.Group>
      </Drawer.Navigator>

    </NavigationContainer>
  );
}