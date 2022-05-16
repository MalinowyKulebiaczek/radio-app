import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUs from '../screens/info/AboutUs';
import Members from '../screens/info/Members';
import InfoOverview from '../screens/info/InfoOverview'
import Schedule from '../screens/info/Schedule';
import RadioAudtions from '../screens/info/auditions/RadioAuditions';
import RadioAudtionDetails from '../screens/info/auditions/RadioAuditionDetails';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';

const infoStack = createNativeStackNavigator();

export default function Navigator({ navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
      }

    return (

        <infoStack.Navigator initialRouteName='infoOverview'
            screenOptions={{
                        headerStyle: { backgroundColor: COLORS.raDarker },
                        headerTintColor: COLORS.lightWhite,
                        backgroundColor: COLORS.raDarker,
                    }}
            >
                <infoStack.Screen
                    name='infoOverview'
                    component={InfoOverview}
                    options={{
                        title: 'Informacje',
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
                <infoStack.Screen
                    name='AboutUs'
                    component={AboutUs}
                    headerShown='false'
                    headerMode='screen'
                    options={{
                        title: 'O nas',
                    }}
                />
                <infoStack.Screen
                    name='Members'
                    component={Members}
                    options={{
                        title: 'Radiowcy'
                    }}
                />
                <infoStack.Screen
                    name='RadioAuditions'
                    component={RadioAudtions}
                    options={{ title: 'Audycje' }}
                />
                <infoStack.Screen
                    name='RadioAuditionDetails'
                    component={RadioAudtionDetails}
                    options={{ title: 'Audycje' }}
                />
                <infoStack.Screen
                    name='Schedule'
                    component={Schedule}
                    options={{ title: 'Ramówka' }}
                />
           
        </infoStack.Navigator>
    );
}