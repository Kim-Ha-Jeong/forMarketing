import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './Style';
import firebase from 'react-native-firebase';

export default class BoothButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
            txt: '',
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }


    componentDidMount() {
        var col = this.props.col;
        var row = this.props.row;
        var addName = ''
        var flag = 0
        firebase.database().ref().child("users").once("value")
            .then((result) => {
                var flagA = 0
                result.forEach((resultChild) => {
                    var key = resultChild.key
                    var basicname = resultChild.child('name').val()
                    var nametest = resultChild.child('name').val().slice(1, 3)
                    var name = nametest.concat(" ")
                    var number = resultChild.child('number').val()
                    var position = resultChild.child('position').val()
                    var team = resultChild.child('team').val()
                    var time = firebase.database().ref("users/" + key + "/timetable/" + col + "/" + row)
                    var use = firebase.database().ref("users/" + key+"/attend")
                    
                    time.on("value", (tt) => {
                        if (tt.val() === false && flag === 0) {
                            if ((row == 3 || row == 4 || row == 5 || row == 6 || row == 7) && (col === "Wed" || col === "Thu" || col === "Fri")) {
                                var k = 0
                                use.transaction(info => {
                                    if((flagA < 5 && this.state.name.length < 5) ){
                                    if(info > 0 && k == 0){
                                        
                                        this.setState({
                                            name : this.state.name.concat(name)
                                        })              
                                        console.log(this.state.name)
                                        console.log(flagA)
                                        k=1
                                        flagA = flagA + 1
                                        return info-1;
                                    }
                                }
                                })
                                
                        
                        }} else if (tt.val() == null && flag === 0) {
                            this.setState({
                                name: this.state.name.concat(this.props.text)
                            })
                            flag = 1
                        }
                    })
                })
            })
        }


        render() {
            return (
                <TouchableOpacity style={[styles.tileButton, this.props.style]} >
                    <Text style={styles.makeText}>{this.state.name}</Text>
                </TouchableOpacity>
            )
        }
    }



