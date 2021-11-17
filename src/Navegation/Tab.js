import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Goals from '../Views/Goals';
import Market from '../Views/Market';
import Home from '../Views/Home';
import Icon from 'react-native-vector-icons'


const Tab = createBottomTabNavigator();


export default function Tabs(props) {
  return (
    <Tab.Navigator screenOptions={({route}) => ({

      // // tabBarIcon: ({ focused, color, size }) => {
      // //   let iconName;

      // //   if (route.name === 'Home') {
      // //     iconName = focused
      // //       ? 'ios-information-circle'
      // //       : 'ios-information-circle-outline';
      // //   } else if (route.name === 'Settings') {
      // //     iconName = focused ? 'ios-list-box' : 'ios-list';
      // //   }

      // //   // You can return any component that you like here!
      //   return <Icon name={iconName} size={size} color={color} />;
      // },


      tabBarActiveTintColor: '#FF7F50',
      tabBarInactiveTintColor: '#2B37FF',
    })}>
      <Tab.Screen name="Home" component={Home} options={{title: 'Página Principal', headerStyle: {backgroundColor: '#0000FF'}, headerTintColor: '#EEF4FF', headerTitleStyle: {
        fontWeight: 'bold',
      }}}/>
      <Tab.Screen name="Goals" component={Goals} options={{title: 'Metas', headerStyle: {backgroundColor: '#0000FF'}, headerTintColor: '#EEF4FF', headerTitleStyle: {
        fontWeight: 'bold',
      }}}/>
      <Tab.Screen name="Mercado" component={Market} options={{title: 'Mercado', headerStyle: {backgroundColor: '#0000FF'}, headerTintColor: '#EEF4FF', headerTitleStyle: {
        fontWeight: 'bold',
      }}} />
    </Tab.Navigator>
  )
}


