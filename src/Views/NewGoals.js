import React, { Component } from 'react'
import {
        Text,
        TextInput,
        View,
        Button,
        Modal,
        StyleSheet,
        TouchableWithoutFeedback,
        Platform,
        TouchableOpacity
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'

const initialState = {
        name: ' ',
        goalsValue: ' ',
        dateEnd: new Date(),
        showDatePickerGoals: false
}


export default class NewGoals extends Component {
        state = {
                ...initialState
        }
        save = () => {
                const newGoals = {
                        text: this.state.text,
                        goalsValue: this.state.goalsValue,
                        dateInit: this.state.dateInit,
                        dateEnd: this.state.dateEnd,
                }

                this.props.onSave && this.props.onSave(newGoals)
                this.setState({...initialState})
        }

        getDateTimePickerGoalsEnd = () => {
                let datePicker = <DateTimePicker
                        value={this.state.dateEnd}
                        onChange={(_, dateEnd) => this.setState({ dateEnd, showDatePickerGoals: false })}
                        mode='date' />

                const dateGoalsStringEnd = moment(this.state.date).format("l")

                if (Platform.OS === 'android') {
                        datePicker = (
                                <View>
                                        <TouchableOpacity
                                                onPress={() => this.setState({ showDatePickerGoals: true })}>
                                                <Text>
                                                        {dateGoalsStringEnd}
                                                </Text>
                                        </TouchableOpacity>
                                        {this.state.showDatePickerGoals && datePicker}
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
                                                Digite o nome da nova meta
                                        </Text>

                                        <TextInput
                                                style={{ borderWidth: 1 }}
                                                onChangeText={text => this.setState({ text })}
                                                value={this.state.text}
                                        />

                                        <Text>
                                                Digite o valor a ser atingido na meta
                                        </Text>

                                        <TextInput
                                                style={{ borderWidth: 1 }}
                                                onChangeText={goalsValue => this.setState({ goalsValue })}
                                                value={this.state.goalsValue}
                                                keyboardType="numeric"
                                        />
                                        <Text>
                                                Digite a  data de encerramento da meta
                                        </Text>

                                        {this.getDateTimePickerGoalsEnd()}

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