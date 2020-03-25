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

export default class MainScrenn extends Component {
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
                    buttonText="인력표 만들기"
                    style={styles.mainButton}
                    onPress={() => this.props.navigation.navigate('Make')}
                />
                <Button
                    buttonText="지난 인력표 보기"
                    style={styles.mainButton}
                    onPress={() => this.props.navigation.navigate('Result')}
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