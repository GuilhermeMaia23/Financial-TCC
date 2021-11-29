import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import NewAction from './NewAction'
import Icon from 'react-native-vector-icons/FontAwesome'
import Actions from '../Components/ActionList'
import { act } from 'react-test-renderer'

const initialState = {
    showAddAction: false,
    action: []
}

export default class Market extends Component {
    state = {
        ...initialState
    }
    addAction = (newAction) => {
        // if (!newAction.name || !newAction.name.trim()) {
        //   Alert.alert('Dados inválidos', ('Nome não informado'))
        //   return
        // }

        const action = [...this.state.action]
        action.push({
            id: Math.random(),
            name: newAction.name,
            actionValue: newAction.actionValue,
            dateAction: newAction.dateAction,
            typeOf: newAction.typeOf
        })
        console.log(action)
        this.setState({ action, showAddAction: false })
    }

    deleteAction = id => {
        const action =  this.state.action.filter(action => action.id !== id)
        this.setState({action})
      }

    render() {
        return (

            <View style={styles.container}>
                <NewAction isVisible={this.state.showAddAction}
                    onCancel={() => this.setState({ showAddAction: false })}
                    onSave={this.addAction}
                />
                <View style={styles.actionList}>
                    <FlatList
                        data={this.state.action}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Actions {...item} onDelete={this.deleteAction}/>} />
                </View>
                <TouchableOpacity style={styles.addButton}
                    activeOpacity={0.7}
                    onPress={() => this.setState({ showAddAction: true })}>
                    <Icon name="plus" size={20}
                        color="white" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E1FF'
    }, actionList: {
        flex: 7,
        marginTop: 15,
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
    },
})


