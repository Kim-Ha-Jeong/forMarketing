import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import styles from './Style';
import Button from './FooterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

export default class BoothSettingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dayStart: 'Mon',
            dayEnd: 'Mon',
            start: '1',
            end: '5',
        };
    }

    componentDidMount() {
        firebase.database().ref().child("users").once("value")
            .then((result) => {
                var flagA = 0
                result.forEach((resultChild) => {
                    var key = resultChild.key
                    var position = resultChild.child('position').val()
                    var team = resultChild.child('team').val()
                    var attend = firebase.database().ref("users/" + key)
                    if (position === "팀장" || position === "부팀장" || team === "마케팅") {
                        attend.update({
                            attend: 4
                        })
                    } else {
                        attend.update({
                            attend: 3
                        })
                    }

                })

            })
    }

    selectValue = () => {
        firebase.database().ref('select').set({
            'dayStart': this.state.dayStart,
            'dayEnd': this.state.dayEnd,
            'start': this.state.start*1,
            'end': this.state.end*1
        })
        this.props.navigation.push('Make')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.arrow, this.props.style]}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Ionicons name='ios-arrow-back' size={30} color='#ec1468' />
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={{ marginRight: 50 }}>시작하는 날</Text>
                    <Text>끝나는 날</Text>
                </View>
                <View style={styles.row}>
                    <Picker
                        selectedValue={this.state.dayStart}
                        style={{ height: 50, width: 100, marginRight: 30 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ dayStart: itemValue })
                        }>
                        <Picker.Item label="Mon" value="Mon" />
                        <Picker.Item label="Tue" value="Tue" />
                        <Picker.Item label="Wed" value="Wed" />
                        <Picker.Item label="Thu" value="Thu" />
                        <Picker.Item label="Fri" value="Fri" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.dayEnd}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ dayEnd: itemValue })
                        }>
                        <Picker.Item label="Mon" value="Mon" />
                        <Picker.Item label="Tue" value="Tue" />
                        <Picker.Item label="Wed" value="Wed" />
                        <Picker.Item label="Thu" value="Thu" />
                        <Picker.Item label="Fri" value="Fri" />
                    </Picker>
                </View>
                <View style={styles.row}>
                    <Text style={{ marginRight: 50 }}>시작하는 시간</Text>
                    <Text>끝나는 시간</Text>
                </View>
                <View style={styles.row} >
                    <Picker
                        selectedValue={this.state.start}
                        style={{ height: 50, width: 100, marginRight: 30 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ start: itemValue })
                        }>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                    <Picker
                        selectedValue={this.state.end}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ end: itemValue })
                        }>
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                    </Picker>
                </View>
                <Button
                    buttonText="완료"
                    style={styles.mainButton}
                    onPress={this.selectValue}
                />
            </View>
        )
    }
}