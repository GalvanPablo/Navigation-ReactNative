import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const SettingsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>SettingsScreen</Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})