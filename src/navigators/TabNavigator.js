import React, {Text} from 'react'
import { StyleSheet, View } from 'react-native'

import HomeNav from './HomeNav'
import SettingsNav from './SettingsNav'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTabs = createBottomTabNavigator()



const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <BottomTabs.Screen name="Inicio" component={HomeNav} />
            <BottomTabs.Screen name="Ajustes" component={SettingsNav} />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
    }
})