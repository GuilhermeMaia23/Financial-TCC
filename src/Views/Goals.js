import React from 'react'
import Textocentral from '../Components/Textocentral'
import {Button, SafeAreaView, Text} from 'react-native'

export default function Goals (props) {
        console.log(props)
        return (
                <Textocentral corFundo='#fff'>
                            <Button
                                    onPress={() => props.navigation.navigate('Nova Meta')}
                                    title="Nova Meta"
                                    color="#841584"/>
                            </Textocentral>
            )
} 
