import React from 'react'                                              
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Goals from '../Views/Goals';
import Reports from '../Views/Reports';
import Market from '../Views/Market';
import Settings from '../Views/Settings';
import Home from '../Views/Home';
import NewExpensive from '../Views/NewExpensive';
import NewGoals from '../Views/NewGoals';                                

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NewExpensiveStack (){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Nova Despesa" component={NewExpensive} />
      </Stack.Navigator>
      )
}

export default  function Tabs (props) {
    return(
      <Tab.Navigator >
        <Tab.Screen name="Home" component={NewExpensiveStack} />
        <Tab.Screen name="Meta" component={Goals} />
        <Tab.Screen name="Relatórios" component={Reports} />
        <Tab.Screen name="Mercado" component={Market} />
        <Tab.Screen name="Configurações" component={Settings} />
      </Tab.Navigator>
      )
} 


