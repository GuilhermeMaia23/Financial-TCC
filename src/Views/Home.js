import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Alert, FlatList, StatusBar } from 'react-native'
import NewExpensive from './NewExpensive'
import Icon from 'react-native-vector-icons/FontAwesome'
import ExpensiveList from '../Components/Expensives'

const initialState = {
  showAddTask: false,
  expensive: []

}

export default class HomeScreen extends Component {
  state = {
    ...initialState
  }

  addExpensive = (newExpensive) => {
    if (!newExpensive.name || !newExpensive.name.trim()) {
      Alert.alert('Dados inválidos', ('Nome não informado'))
      return
    }

    const expensive = [...this.state.expensive]
    expensive.push({
      id: Math.random(),
      name: newExpensive.name,
      expensiveValue: newExpensive.expensiveValue,
      dateExpensive: newExpensive.dateExpensive,
      categories: newExpensive.categories
    })

    this.setState({ expensive, showAddTask: false })
  }
  render() {
    return (
      <View style={styleHome.container} >
        <StatusBar backgroundColor='#0000FF' />
        <NewExpensive isVisible={this.state.showAddTask}
          onCancel={() => this.setState({ showAddTask: false })}
          onSave={this.addExpensive} />
        <View style={styleHome.saldo}>
          <Text style={styleHome.saldoText}>
            Saldo Total:
          </Text>
        </View>
        <View style={styleHome.expensiveList}>
          <FlatList
            data={this.state.expensive}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <ExpensiveList {...item} />} />
        </View>
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
    flex: 1,
    backgroundColor: '#D2E1FF'
  }, expensiveList: {
    flex: 7,
    marginTop: 15,
  }, saldo: {
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 13,
    flex: 3,
    height: 350,
    width: 350,
    justifyContent: "center",
    alignSelf: "center",
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  }, saldoText: {
    marginStart: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4B5056',
  }
})