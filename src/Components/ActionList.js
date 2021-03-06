import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ActionList (props){
    
    const date = moment(props.dateAction).locale('pt-br').format('L')
    const rightContent = () => {
        return(
            <TouchableOpacity style={styleExpensive.right}
            onPress={() => props.onDelete && props.onDelete(props.id)}>
                <Icon name="trash" size={30} color='#FFF'/>
            </TouchableOpacity>
        )
    }
    return(
        <Swipeable
        renderRightActions={rightContent}>
            <View style={styleExpensive.container}>
                <View style={styleExpensive.categoriesContainer}>
                    <Text style={styleExpensive.text}>{props.typeOf} </Text>
                </View>
                <View style={styleExpensive.nameDateContainer}>
                    <Text style={styleExpensive.text}>{props.name}</Text>
                    <Text style={styleExpensive.text}>{date}</Text>
                </View>
                <View style={styleExpensive.valeuContainer}>
                    <Text style={styleExpensive.text}>{"R$ " + props.actionValue}</Text>
                </View>
            </View>
        </Swipeable>
    )    
}

const styleExpensive = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        padding: 10,
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
    }, right: {
        backgroundColor: 'red',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    }, left: {
        backgroundColor: '#ffef2a',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    }
})
