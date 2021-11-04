import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import NewExpensive from './NewExpensive'
import Icon from 'react-native-vector-icons/FontAwesome'

const initialState = {
  showAddTask: false,
  expensive: []

}

export default class HomeScreen extends Component {
  state = {
    ...initialState
  }

  addExpensive = (newExpensive) => { 
      if(!newExpensive.name || !newExpensive.name.trim()){
        Alert.alert('Dados inválidos', ('Nome não informado'))
        return
      }

      const expensive = [...this.state.expensive]
      expensive.push({
        id: Math.random,
        name: newExpensive.name,
        expensiveValue: newExpensive.expensiveValue,
        dateExpensive: newExpensive.dateExpensive
      })

      this.setState({ expensive, showAddTask: false})
      console.warn(expensive)
  }
  render() {
    return (
      <View style={styleHome.container} >
        <NewExpensive isVisible={this.state.showAddTask}
          onCancel={() => this.setState({ showAddTask: false })}
          onSave={this.addExpensive} />
        <TouchableOpacity style={styleHome.addButton}
          activeOpacity={0.7}
          onPress={() => this.setState({ showAddTask: true })}>
          <Icon name="plus" size={20}
            color="white" />
        </TouchableOpacity>
      </View>
    )
  }
}


const styleHome = StyleSheet.create({
  container: {
    flex: 1
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})