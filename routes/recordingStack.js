import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordingDetails from "../screens/recordings/RecordingDetails";
import RecordingsOverview from "../screens/recordings/RecordingsOverview";

const recordingsStack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <recordingsStack.Navigator initialRouteName='RecordingsOverview'>
            <recordingsStack.Group>
                <recordingsStack.Screen
                    name='RecordingsOverview'
                    component={RecordingsOverview}
                    options={{ headerShown: false, }}
                />
                <recordingsStack.Screen
                    name='RecordingDetails'
                    component={RecordingDetails}
                    options={{ headerShown: false, }}
                />
            </recordingsStack.Group>
        </recordingsStack.Navigator>
    );
}