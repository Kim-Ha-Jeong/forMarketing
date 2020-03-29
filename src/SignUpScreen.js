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
import firebase from 'react-native-firebase';
import Toast from 'react-native-easy-toast';

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ' ',
            team: ' ',
            email: ' ',
            password: ' ',
        }
    }

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((result) => result.user.updateProfile({
                displayName: this.state.name,
                photoURL: this.state.team
            }))
            .then(()=> this.props.navigation.navigate('Main'))
            .catch(() => this.refs.toast.show('이메일 형식을 확인해 주세요\n비밀번호는 6자 이상이어야 합니다.',1000))
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
                    placeholder='이름'
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={team => this.setState({ team })}
                    placeholder='팀 / 팀원 or 팀장 / 기수'
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={email => this.setState({ email })}
                    placeholder='이메일'
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={password => this.setState({ password })}
                    placeholder='비밀번호'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <FooterButton 
                    buttonText="회원가입"
                    onPress={this.handleSignUp} 
                />
                <Toast ref="toast" />
            </View>
        )
    }
}
