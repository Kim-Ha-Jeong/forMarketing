import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './Style';
import Button from './FooterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.arrow, this.props.style]}
                    onPress={() => this.props.navigation.navigate('Main') }
                >
                    <Ionicons name='ios-arrow-back' size={30} color='#ec1468' />
                </TouchableOpacity>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('./icon.png')}
                />
                <Text style={styles.settingText}>현재 버전 1.0.0</Text>
                <Text style={styles.settingDesc}>지원환경 iOS 7.0 이상, android 7.0 이상</Text>
                <Button
                    buttonText="로그아웃"
                />
                <Text style={styles.settingText}>제안 마케팅팀 팀장 이민주님</Text>
                <Text style={styles.settingText}>개발 기술설계팀 팀원들</Text>
            </View>
        )
    }
}