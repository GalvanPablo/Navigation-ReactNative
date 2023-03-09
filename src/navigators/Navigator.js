import { CategoriesScreen, CategoryScreen, ItemDetailScreen } from '../screens'

import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteNames="Categories">
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="Category" component={CategoryScreen} />
                <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator