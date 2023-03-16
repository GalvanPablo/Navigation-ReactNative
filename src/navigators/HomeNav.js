import { CategoriesScreen, CategoryScreen, ItemDetailScreen } from '../screens'
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();



const HomeNav = () => {
    return (
        <Stack.Navigator initialRouteNames="Categories">
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        </Stack.Navigator>
    )
}

export default HomeNav