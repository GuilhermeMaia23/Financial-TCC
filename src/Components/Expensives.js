import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'

export default function ExpensivesList(props) {

    const date = moment(props.date).locale('pt-br').format('L')

    return (
        <View style={styleExpensive.container}>
            <View style={styleExpensive.categoriesContainer}>
                <Text style={styleExpensive.text}>{props.categories} </Text>
            </View>
            <View style={styleExpensive.nameDateContainer}>
                <Text style={styleExpensive.text}>{props.name}</Text>
                <Text style={styleExpensive.text}>{date}</Text>
            </View>
            <View style={styleExpensive.valeuContainer}>
                <Text style={styleExpensive.text}>{props.expensiveValue}</Text>
            </View>
        </View>
    )
}

const styleExpensive = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        paddingVertical: 10,
        backgroundColor: '#FFF',
        width: '90%',
        alignSelf: 'center',
        justifyContent: "center",
        borderRadius: 13,
    },
    text: {
        color: '#4B5056',
        fontSize: 15,
    },
    categoriesContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: '30%'
    },
    nameDateContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: '30%'
    },
    valeuContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: '30%'
    },
})