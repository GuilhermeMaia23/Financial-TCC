import React from 'react'
import { View, Text} from 'react-native'

export default function GoalsList (props) {
    return (
        <View>
           <Text>{props.text}</Text> 
           <Text>{props.goalsValue}</Text> 
           <Text>{props.dateInit}</Text> 
           <Text>{props.dateEnd}</Text> 
        </View>
    )
}
