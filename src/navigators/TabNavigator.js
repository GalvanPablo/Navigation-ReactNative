import React, {Text} from 'react'
import { StyleSheet, View } from 'react-native'

import HomeNav from './HomeNav'
import { Ionicons } from '@expo/vector-icons';
import SettingsNav from './SettingsNav'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()



const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { // Fondo de la barra de tabs
                    height: 65,
                },
                tabBarItemStyle: { // Fondo de cada tab
                    backgroundColor: 'red',
                    margin: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarLabelStyle: { // Texto
                    fontFamily: 'OpenSans_400Regular',
                    fontSize: 12,
                    margin: 0,
                    padding: 0,
                },
                tabBarIconStyle:{ // Fondo del icono
                    margin: 0,
                    padding: 0,
                },
                tabBarBadgeStyle:{ // Numero de notificaciones

                },
            }}
        >
            <Tab.Screen name="Inicio" component={HomeNav} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="home-outline" size={24} color={focused ? 'black' : "#748C94"} />
                    ),
                }}
            />
            <Tab.Screen name="Ajustes" component={SettingsNav}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="settings-outline" size={24} color={focused ? 'black' : "#748C94"} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})