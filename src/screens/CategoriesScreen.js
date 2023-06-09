import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>CategoriesScreen</Text>
            <Button title="Go to Category" onPress={() => navigation.navigate('Category')} />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})