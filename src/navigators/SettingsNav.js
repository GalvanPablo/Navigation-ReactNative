import { Text, View } from 'react-native'

import React from 'react'
import { SettingsScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();


const SettingsNav = () => {
    return (
        <Stack.Navigator initialRouteNames="Settings">
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default SettingsNav