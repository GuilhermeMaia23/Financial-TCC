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
        TouchableOpacity,
        Picker,
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'


const initialState = {
        name: ' ',
        expensiveValue: ' ',
        photo: '',
        categories: 'Receita',
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
                        categories: this.state.categories
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
                                                Selecione a categoria:
                                        </Text>
                                        <Picker onValueChange={( itemValue ,itemIndex) => this.setState({itemValue}) }
                                        selectedValue={this.categories}>
                                                <Picker.Item label="Receita" value="Receita"/>
                                                <Picker.Item label="Despesa" value="Despesa"/>
                                        </Picker>
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