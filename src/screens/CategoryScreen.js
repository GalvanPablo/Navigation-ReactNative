import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoryScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>CategoryScreen</Text>
            <Button title="Go to ItemDetail" onPress={() => navigation.navigate('ItemDetail')} />
        </View>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})