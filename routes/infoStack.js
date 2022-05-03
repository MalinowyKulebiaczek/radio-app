import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumOfTheWeekOverview from "../screens/AlbumOfTheWeekOverview";
import AlbumOfTheWeekDetails from "../screens/AlbumOfTheWeekDetails";
import AboutUs from '../screens/info/AboutUs';
import Members from '../screens/info/Members';
import InfoOverview from '../screens/info/InfoOverview'
import Schedule from '../screens/info/Schedule';
import RadioAudtions from '../screens/info/RadioAuditions';

const infoStack = createNativeStackNavigator();

export default function Navigator() {
    return (

        <infoStack.Navigator initialRouteName='infoOverview'>
            <infoStack.Group
                // screenOptions={{
                //     headerStyle: { backgroundColor: '#ddd' },
                //     headerTintColor: '#444',
                //     height: 80,
                //     headerTitleStyle: {
                //         fontWeight: 'roboto-bold',
                //     },
                // }}
            >   
                <infoStack.Screen
                    name='infoOverview'
                    component={InfoOverview}
                    options={{
                        title: 'Radio aktywne',
                        headerShown: false,
                    }}
                />
                <infoStack.Screen
                    name='AboutUs'
                    component={AboutUs}
                    options={{
                        title: 'O nas',
                        headerShown: false,
                    }}
                />
                <infoStack.Screen
                    name='Members'
                    component={Members}
                    options={{
                        title: 'O nas',
                        headerShown: false,
                    }}
                />
                <infoStack.Screen
                    name='RadioAuditions'
                    component={RadioAudtions}
                    options={{ headerShown: false }}
                />
                <infoStack.Screen
                    name='Schedule'
                    component={Schedule}
                    options={{ headerShown: false }}
                />
            </infoStack.Group>
        </infoStack.Navigator>
    );
}