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
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen name="Inicio" component={HomeNav} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="home-outline" size={24} color={focused ? 'black' : "#748C94"} />
                            <Text>INICIO</Text>
                        </View>
                    ),
                    // tabBarLabel: ({ focused }) => (
                    //     <Text style={{ color: focused ? 'black' : "#748C94" }}>INICIO</Text>
                    // )
                }}
            />
            <Tab.Screen name="Ajustes" component={SettingsNav}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIcon}>
                            <Ionicons name="settings-outline" size={24} color={focused ? 'black' : "#748C94"} />
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
        height: 60,
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})