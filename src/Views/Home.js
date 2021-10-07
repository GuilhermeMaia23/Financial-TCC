import React from 'react'
import Textocentral from '../Components/Textocentral'
import {Button, SafeAreaView, Text, View} from 'react-native'
import NewExpensive from './NewExpensive'


export default function Home (props) {
          return ( 
                < View style = { { flex : 1 , justifyContent : 'center' , alignItems : 'center' } } >    
                  <Text> Tela inicial </Text>
                  <Button
                    title = "Nova despesa"
                    onPress = { ( ) => navigation.navigate( 'Nova Despesa' ) } 
                  />
                </View>
              );
} 