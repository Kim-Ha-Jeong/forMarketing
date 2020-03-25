import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './Style';
import FooterButton from './FooterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '이름',
            id: '아이디',
            password: '비밀번호',
        }
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
                <Image source={require('./icon.png')} style={styles.icon} />
                <Text style={styles.signUpTitle}>For Marketing{"\n"}
                    <Text style={{ fontSize: 14 }}>계정 생성</Text>
                </Text>
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={name => this.setState({ name })}
                    placeholder={this.state.name}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={id => this.setState({ id })}
                    placeholder={this.state.id}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={password => this.setState({ password })}
                    placeholder={this.state.password}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <Text style={styles.description}>🌸이화이언 마케팅팀 팀장기수만 열람이 가능합니다🌸</Text>
                <FooterButton buttonText="회원가입" />
            </View>
        )
    }
}
