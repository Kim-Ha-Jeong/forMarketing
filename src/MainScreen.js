import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './Style';
import Button from './FooterButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';

export default class MainScrenn extends Component {

    constructor(props) {
        super(props);
        this.firstMakeTimetable = this.firstMakeTimetable.bind(this);
    }

    firstMakeTimetable = () => {
        var user = firebase.auth().currentUser;
        var isExist = firebase.database().ref('users/' + user.uid + '/name');
        isExist.on("value", function (result) {
            console.log(result.val());
            if (!result.val()) {
                var info = user.photoURL.split('/');
                firebase.database().ref('users/' + user.uid).set({
                    name: user.displayName,
                    team: info[0],
                    position: info[1],
                    number: info[2],
                    timetable: {
                        Mon: {
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false
                        },
                        Tue: {
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false
                        },
                        Wed: {
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false
                        },
                        Thu: {
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false
                        },
                        Fri: {
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false
                        }
                    }
                })
            }
        })
        this.props.navigation.push('Timetable');
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.arrow, this.props.style]}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Ionicons name='ios-arrow-back' size={30} color='#ec1468' />
                </TouchableOpacity>
                <Image
                    source={require('./icon.png')}
                    style={styles.icon}
                />
                <Button
                    buttonText="시간표 만들기"
                    style={styles.mainButton}
                    onPress={this.firstMakeTimetable}
                />
                <Button
                    buttonText="인력표 만들기"
                    style={styles.mainButton}
                    onPress={() => this.props.navigation.navigate('Make')}
                />
                <TouchableOpacity
                    style={{ marginTop: 35 }}
                    onPress={() => this.props.navigation.navigate('Setting')}
                >
                    <AntDesign name="setting" color="#ec1468" size={30} />
                </TouchableOpacity>
            </View>
        )
    }
}