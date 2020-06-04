import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './Style';
import * as firebase from 'firebase';

export default class FooterButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: '#fff'
        }
    }

    componentDidMount(){
        var user = firebase.auth().currentUser;
        var col = this.props.col;
        var row = this.props.row;
        var flag = 0;
        var isTrue = firebase.database().ref('users/' + user.uid + '/timetable/'+col+'/'+row)
        isTrue.on("value", setting = (result) => {
            if(result.val() === false && flag === 0){
                this.setState({
                    color:'#fff'
                });
                flag = 1;
            } else if(result.val() && flag === 0){
                this.setState({
                    color:'#feecf3'
                });
            }
        })
    }


    changeDB = () => {
        var user = firebase.auth().currentUser;
        var col = this.props.col;
        var row = this.props.row;
        var flag = 0;
        var isTrue = firebase.database().ref('users/' + user.uid + '/timetable/'+col+'/'+row)
        isTrue.on("value", changeColor = (result) => {
            if(result.val() === false && flag === 0){
                firebase.database().ref('users/' + user.uid + '/timetable/'+col).update({
                    [row]:true
                });
                this.setState({
                    color:'#feecf3'
                });
                flag = 1;
            } else if(result.val() && flag === 0){
                firebase.database().ref('users/' + user.uid + '/timetable/'+col).update({
                    [row]:false
                });
                this.setState({
                    color:'#fff'
                });
                flag = 1;
            }
        })
        
    }

    render() {
        return(
            <TouchableOpacity 
                style={[styles.tileButton,{backgroundColor: this.state.color},this.props.style]}
                onPress={this.changeDB}
                disabled={this.props.dis}
                underlayColor='#fff'
                >
                <Text style={styles.tileText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}