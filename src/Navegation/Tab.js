import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Goals from '../Views/Goals';
import Reports from '../Views/Reports';
import Market from '../Views/Market';
import Settings from '../Views/Settings';
import Home from '../Views/Home';


const Tab = createBottomTabNavigator();


export default function Tabs(props) {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meta" component={Goals} />
      <Tab.Screen name="Relatórios" component={Reports} />
      <Tab.Screen name="Mercado" component={Market} />
      <Tab.Screen name="Configurações" component={Settings} />

    </Tab.Navigator>
  )
}


