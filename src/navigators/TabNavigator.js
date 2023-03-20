import { StyleSheet, Text, View } from 'react-native'

import HomeNav from './HomeNav'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import SettingsNav from './SettingsNav'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()



const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen name="Inicio" component={HomeNav} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Ionicons name="home-outline" size={24} color={focused ? 'black' : "#748C94"} />
                            <Text style={[styles.itemText, { color: focused ? 'black' : "#748C94" }]}>Inicio</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Ajustes" component={SettingsNav}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Ionicons name="settings-outline" size={24} color={focused ? 'black' : "#748C94"} />
                            <Text style={[styles.itemText, { color: focused ? 'black' : "#748C94" }]}>Ajustes</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        minHeight: 60,
        height: 70,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText:{
        fontSize: 13,
    },
})