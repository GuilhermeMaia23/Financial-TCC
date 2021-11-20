import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Goals from '../Views/Goals';
import Market from '../Views/Market';
import Home from '../Views/Home';
import Ionicons from 'react-native-vector-icons/Feather'


const Tab = createBottomTabNavigator();


export default function Tabs(props) {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({

      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Goals') {
          iconName = focused ? 'target' : 'target';
        } else if (route.name === 'Market') {
          iconName = focused ? 'bar-chart' : 'bar-chart';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },


      tabBarActiveTintColor: '#FF7F50',
      tabBarInactiveTintColor: '#2B37FF',
    })}>
      <Tab.Screen name="Home" component={Home} options={{
        title: 'Página Principal', headerStyle: { backgroundColor: '#0000FF' }, headerTintColor: '#EEF4FF', headerTitleStyle: {
          fontWeight: 'bold',
        }
      }} />
      <Tab.Screen name="Goals" component={Goals} options={{
        title: 'Metas', headerStyle: { backgroundColor: '#0000FF' }, headerTintColor: '#EEF4FF', headerTitleStyle: {
          fontWeight: 'bold',
        }
      }} />
      <Tab.Screen name="Market" component={Market} options={{
        title: 'Mercado', headerStyle: { backgroundColor: '#0000FF' }, headerTintColor: '#EEF4FF', headerTitleStyle: {
          fontWeight: 'bold',
        }
      }} />
    </Tab.Navigator>
  )
}


