import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import NewGoals from './NewGoals'


const initialState = {
        showAddTask: false,
        goals: []
}

export default class Goals extends Component {
        state = {
                ...initialState
        }

        addGoals = (newGoals) => {
                // if(!newGoals.name || !newGoals.name.trim()){
                //         Alert.alert('Dados inválidos', ('Nome não informado'))
                //         return
                // }

                const goals = [...this.state.goals]
                goals.push({
                        id:Math.random,
                        text: newGoals.text,
                        goalsValue: newGoals.goalsValue,
                        dateInit: newGoals.dateInit,
                        dateEnd: newGoals.dateEnd
                })

                this.setState({ goals, showAddTask: false})
                console.warn(goals)

        }

        render() {
                return (
                        <View style={styles.container}>
                                <NewGoals isVisible={this.state.showAddTask}
                                onCancel={() => this.setState({showAddTask: false})}
                                onSave={this.addGoals}/>
                                <TouchableOpacity style={styles.addButton}
                                        activeOpacity={0.7}
                                        onPress={() => this.setState({ showAddTask: true })}>
                                        <Icon name="plus" size={20}
                                                color='#FFF' />
                                </TouchableOpacity>
                        </View>

                )
        }
}


const styles = StyleSheet.create({
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