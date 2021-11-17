import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'

export default props => (
    <View style={styles.container}>
        <StatusBar backgroundColor = '#0000FF' />
        <Text>
            Market
            </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#D2E1FF'
    },
})


