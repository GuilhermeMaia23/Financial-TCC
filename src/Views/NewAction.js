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
    actionValue:'',
    typeOf: '',
    dateAction: new Date(),
    showDatePickerExpensive: false,
    methodEdit: false
}
export default class NewAction extends Component {
    state = {
            ...initialState
    }

    save = () => {
            const newAction = {
                    name: this.state.name,
                    actionValue: this.state.actionValue,
                    dateAction: this.state.dateAction,
                    typeOf: this.state.typeOf
            }
            this.props.onSave && this.props.onSave(newAction)
            this.setState({ ...initialState })

    }
    
    getDateTimePickerExpensive = () => {
            let datePicker = <DateTimePicker
                    value={this.state.dateAction}
                    onChange={(_, dateAction) => this.setState({ dateAction, showDatePickerAction: false })}
                    mode='date' />

            const dateActionString = moment(this.state.date).format("l")

            if (Platform.OS === 'android') {
                    datePicker = (
                            <View>
                                    <TouchableOpacity onPress={() => this.setState({ showDatePickerAction: true })}>
                                            <Text>
                                                    {dateActionString}
                                            </Text>
                                    </TouchableOpacity>
                                    {this.state.showDatePickerAction && datePicker}
                            </View>
                    )
            }
            return datePicker
    }

   

    render() {
            // const { name, actionValue, dateAction, typeOf } = this.props.onSelected[0] || {}

            return (
                    <Modal transparent={true}
                            visible={this.props.isVisible}
                            onRequestClose={this.props.onCancel}
                            animationType='slide'
                    >
                            <TouchableWithoutFeedback
                                    onPress={this.props.onCancel}>
                                    <View style={styles.background}>
                                    </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                    <Text>
                                            Selecione a categoria:
                                    </Text>
                                    <Picker onValueChange={(typeOf) => this.setState({ typeOf })}
                                            selectedValue={this.typeOf}>
                                            <Picker.Item label=" " value=" " />
                                            <Picker.Item label="Ação" value="Ação" />
                                            <Picker.Item label="Fundo Imobiliário" value="Fundo Imobiliário" />
                                            <Picker.Item label="Criptomoedas" value="Criptomoedas" />
                                    </Picker>
                                    <Text>
                                            Digite a despesa:
                            </Text>

                                    <TextInput
                                            style={{ borderWidth: 1 }}
                                            onChangeText={name => this.setState({ name})}
                                            value={this.state.text}
                                            editable={true}
                                    />

                                    <Text>
                                            Digite o valor da despesa:
                            </Text>

                                    <TextInput
                                            style={{ borderWidth: 1 }}
                                            onChangeText={actionValue => this.setState({ actionValue})}
                                            value={this.state.actionValue}
                                            keyboardType="numeric"
                                            editable={true}
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
    }, modalContainer: {
            backgroundColor: '#FFF',
            padding: 10,
    }
})