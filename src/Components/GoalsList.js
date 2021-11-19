import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function GoalsList(props) {

    const date = moment(props.dateEnd).locale('pt-br').format('L')

    const rightContent = () => {
        return(
            <TouchableOpacity style={styleGoals.right}
            onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon  name="trash" size={30} color='#FFF'/>
            </TouchableOpacity>
        )
    }
    const leftContent = () => {
        return(
            <TouchableOpacity style={styleGoals.left}>
                <Icon  name="pencil" size={30} color='#FFF'/>
            </TouchableOpacity>
        )
    }

    return (
        <Swipeable
        renderRightActions={rightContent}
        renderLeftActions={leftContent}>
            <View style={styleGoals.container}>
                <View style={styleGoals.textContainer}>
                    <Text style={styleGoals.text} >{props.text}</Text>
                    <Text style={styleGoals.text}>{date}</Text>
                </View>
                <View style={styleGoals.valeuContainer}>
                    <Text style={styleGoals.text}>{props.goalsValue}</Text>
                </View>
                <View style={styleGoals.faltando}>
                    <Text style={styleGoals.text}> {'Total arrecadado: 200 de ' + props.goalsValue}</Text>
                </View>
            </View>
        </Swipeable>
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
    }, right: {
        backgroundColor: 'red',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    }, left: {
        backgroundColor: 'yellow',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    }
})
