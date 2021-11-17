import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'

export default function GoalsList(props) {

    const date = moment(props.dateEnd).locale('pt-br').format('L')

    return (
        <View style={styleGoals.container}>
            <View style={styleGoals.textContainer}>
                <Text style={styleGoals.text} >{props.text}</Text>
                <Text style={styleGoals.text}>{date}</Text>
            </View>
            <View style={styleGoals.valeuContainer}>
                <Text style={styleGoals.text}>{props.goalsValue}</Text>
            </View>
            <View style={styleGoals.faltando}>
                <Text style={styleGoals.text}> {'Total arrecadado: 200 de '+ props.goalsValue}</Text>
            </View>


        </View>
    )
}

const styleGoals = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: '#FFF',
        width: '95%',
        alignSelf: 'center',
        justifyContent: "center",
        borderRadius: 13,
    },
    text: {
        color: '#4B5056',
        fontSize: 15,
    },
    textContainer: {
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: '30%'
    },
    valeuContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: '30%'
    },
    faltando: {
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: '40%'
    },
})
