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

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.firstMakeTimetable = this.firstMakeTimetable.bind(this);
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
                            attend : 4
                        })
                    } else {
                        attend.update({
                            attend : 3
                        })
                    }

                })

            })
        }

        firstMakeTimetable = () => {
            var user = firebase.auth().currentUser;
            var isExist = firebase.database().ref('users/' + user.uid + '/name');
            isExist.on("value", function (result) {
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

        makeLabor = () => {
            var isExist = firebase.database().ref('labor/');
            isExist.on("value", function (result) {
                if (!result.val()) {
                    firebase.database().ref().put({
                        labor: {
                            Mon: {
                                1: '',
                                2: '',
                                3: '',
                                4: '',
                                5: '',
                                6: '',
                                7: '',
                                8: '',
                                9: ''
                            },
                            Tue: {
                                1: '',
                                2: '',
                                3: '',
                                4: '',
                                5: '',
                                6: '',
                                7: '',
                                8: '',
                                9: ''
                            },
                            Wed: {
                                1: '',
                                2: '',
                                3: '',
                                4: '',
                                5: '',
                                6: '',
                                7: '',
                                8: '',
                                9: ''
                            },
                            Thu: {
                                1: '',
                                2: '',
                                3: '',
                                4: '',
                                5: '',
                                6: '',
                                7: '',
                                8: '',
                                9: ''
                            },
                            Fri: {
                                1: '',
                                2: '',
                                3: '',
                                4: '',
                                5: '',
                                6: '',
                                7: '',
                                8: '',
                                9: ''
                            }
                        }
                    })
                }
            })
            this.props.navigation.push('Make');
        }

        render() {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={[styles.arrow, this.props.style]}
                        onPress={() => this.props.navigation.navigate('Login')}
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
                        buttonText="오프라인 부스 인력표"
                        style={styles.mainButton}
                        onPress={this.makeLabor}
                    />
                    <Button
                        buttonText="행사 인력표"
                        style={styles.mainButton}
                        onPress={() => this.props.navigation.navigate('Event')}
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