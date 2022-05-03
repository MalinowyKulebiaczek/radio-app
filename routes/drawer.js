import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AlbumOfTheWeekStack from './albumOfTheWeekStack';
import PlayScreenStack from './playScreenStack';
import InfoStack from './infoStack';
import { HeaderTitle } from 'react-navigation-stack';

// const { Navigator, Screen } = createDrawerNavigator();

// export const RootDrawerNavigator = () => (
//     <Navigator initialRouteName='PlayScreenStack'>
//         <Screen
//             name='PlayScreenStack'
//             component={PlayScreenStack}
//         />
//         <Screen
//             name='AlbumOfTheWeekStack'
//             component={AlbumOfTheWeekStack}
//         />
//     </Navigator>
// );

// export const AppNavigator = () => (
//     <NavigationContainer>
//         <RootDrawerNavigator />
//     </NavigationContainer>
// );

// export default AppNavigator;

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
          
      <Drawer.Group screenOptions={{
                        headerStyle: { backgroundColor: '#ddd' },
                        // headerTitleStyle: {
                        //     fontFamily: 'roboto-bold',
                        //   },
                        headerTintColor: '#444',
                        height: 80,
                        HeaderTitle: 'asdas',
                        headerTitleAlign: 'center',
                    }}>
        <Drawer.Screen name="Home" component={PlayScreenStack} options={{ title: 'Radio aktywne' }} />
        <Drawer.Screen name="AlbumOfTheWeekStack" component={AlbumOfTheWeekStack} options={{ title: 'Płyta tygodnia' }} />
        <Drawer.Screen name="Info" component={InfoStack} options={{ title: 'Informacje' }} />
        </Drawer.Group>
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}