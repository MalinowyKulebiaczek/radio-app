import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AlbumOfTheWeekStack from './albumOfTheWeekStack';
import PlayScreenStack from './playScreenStack';
import InfoStack from './infoStack';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
          
      <Drawer.Group screenOptions={{
                        headerStyle: { backgroundColor: '#2c2c3a' },
                        // headerTitleStyle: {
                        //     fontFamily: 'roboto-bold',
                        //   },
                        headerTintColor: '#eee',
                        height: 80,
                        HeaderTitle: 'asdas',
                        headerTitleAlign: 'center',
                        backgroundColor: '#2c2c3a'
                    }}>
        <Drawer.Screen name="Home" component={PlayScreenStack} options={{ title: 'Radio aktywne' }} />
        <Drawer.Screen name="AlbumOfTheWeekStack" component={AlbumOfTheWeekStack} 
            options={{ title: 'Płyta tygodnia' }} />
        <Drawer.Screen name="Info" component={InfoStack} options={{ title: 'Informacje' }} />
        </Drawer.Group>
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}