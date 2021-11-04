import React, { Component } from 'react'
import {
        Text,
        Platform,
        TextInput,
        View,
        Button,
        Modal,
        StyleSheet,
        TouchableWithoutFeedback,
        TouchableOpacity
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'


const initialState = {
        name: ' ',
        expensiveValue: ' ',
        photo: '',
        dateExpensive: new Date(),
        showDatePickerExpensive: false
}

export default class NewExpensive extends Component {
        state = {
                ...initialState
        }
        
        save = () => {
                const newExpensive = {
                        name: this.state.name,
                        expensiveValue: this.state.expensiveValue,
                        dateExpensive: this.state.dateExpensive,
                }
                this.props.onSave && this.props.onSave(newExpensive)
                this.setState({...initialState})
        }

        getDateTimePickerExpensive = () => {
                let datePicker = <DateTimePicker
                        value={this.state.dateExpensive}
                        onChange={(_, dateExpensive) => this.setState({ dateExpensive, showDatePickerExpensive: false })}
                        mode='date' />

                const dateExpensiveString = moment(this.state.date).format("l")

                if (Platform.OS === 'android') {
                        datePicker = (
                                <View>
                                        <TouchableOpacity onPress={() => this.setState({ showDatePickerExpensive: true })}>
                                                <Text>
                                                        {dateExpensiveString}
                                                </Text>
                                        </TouchableOpacity>
                                        {this.state.showDatePickerExpensive && datePicker}
                                </View>
                        )
                }
                return datePicker
        }


        render() {
                return (
                        <Modal transparent={true}
                                visible={this.props.isVisible}
                                onRequestClose={this.props.onCancel}
                                animationType='slide'>
                                <TouchableWithoutFeedback
                                        onPress={this.props.onCancel}>
                                        <View style={styles.background}>
                                        </View>
                                </TouchableWithoutFeedback>
                                <View>
                                        <Text>
                                                Digite a despesa:
                                </Text>

                                        <TextInput
                                                style={{ borderWidth: 1 }}
                                                onChangeText={name => this.setState({ name })}
                                                value={this.state.text}
                                        />

                                        <Text>
                                                Digite o valor da despesa:
                                </Text>

                                        <TextInput
                                                style={{ borderWidth: 1 }}
                                                onChangeText={expensiveValue => this.setState({ expensiveValue })}
                                                value={this.setState.expensiveValue}
                                                keyboardType="numeric"
                                        />
                                        <Text>
                                                Insira a foto da nota
                                </Text>

                                        <TextInput
                                                style={{ borderWidth: 1 }}
                                                onChangeText={photo => this.setState({ photo })}
                                                value={this.setState.photo}
                                        />
                                        <Text>
                                                Confirme a  data da despesa: 
                                </Text>

                                        {this.getDateTimePickerExpensive()}
                                        <Button
                                                title="Salvar"
                                                onPress={this.save}
                                        />
                                        <Button
                                                title="Cancelar"
                                                onPress={this.props.onCancel}
                                        />

                                </View>
                                <TouchableWithoutFeedback
                                        onPress={this.props.onCancel}>
                                        <View style={styles.background}>
                                        </View>
                                </TouchableWithoutFeedback>
                        </Modal>
                )
        }
}

const styles = StyleSheet.create({
        background: {
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }
})