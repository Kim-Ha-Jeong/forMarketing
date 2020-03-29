import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './Style';
import firebase from 'react-native-firebase';

export default class FooterButton extends Component {
    constructor(props){
        super(props)
    }

    changeDB = () => {
        var user = firebase.auth().currentUser;
        var col = this.props.col;
        var row = this.props.text;
        var flag = 0;
        var isTrue = firebase.database().ref('users/' + user.uid + '/timetable/'+col+'/'+row)
        isTrue.on("value", function (result) {
            if(result.val() === false && flag === 0){
                firebase.database().ref('users/' + user.uid + '/timetable/'+col).update({
                    [row]:true
                });
                flag = 1;
            } else if(result.val() && flag === 0){
                firebase.database().ref('users/' + user.uid + '/timetable/'+col).update({
                    [row]:false
                });
                flag = 1;
            }
        })
        
    }

    render() {
        return(
            <TouchableOpacity 
                style={[styles.tileButton, this.props.style]}
                onPress={this.changeDB}
                disabled={this.props.dis}
                >
                <Text style={styles.tileText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}