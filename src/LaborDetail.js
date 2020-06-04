import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './Style';
import * as firebase from 'firebase';

export default class laborDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
            txt: ''
        }
    }

    componentDidMount(){
        firebase.database().ref().child("users").once("value")
            .then((result) => {
                result.forEach((resultChild) => {
                    var key = resultChild.key
                    var nametest = resultChild.child('name').val().slice(1, 3)
                    var name = nametest.concat(" ")
                   
                })
            })
    }

    render() {
        return (
            <View></View>
        )
    }
}