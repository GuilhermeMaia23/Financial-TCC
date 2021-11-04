import React from 'react'
import { View, Text} from 'react-native'

export default function ExpensivesList (props) {
    return (
        <View>
           <Text>{props.name}</Text> 
           <Text>{props.expensiveValue}</Text> 
           <Text>{props.dateExpensive}</Text> 
        </View>
    )
}
