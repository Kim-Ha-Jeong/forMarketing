import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './Style';
import FooterButton from './FooterButton';
import * as firebase from 'firebase';
import Toast from 'react-native-easy-toast';

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            idText: '이메일',
            pwText: '비밀번호',
            id: '',
            pw: ''
        }
    }

    handleLogin = () => {
        const { id, pw } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(id, pw)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(() => this.refs.toast.show('잘못된 로그인 정보입니다. 다시 로그인 해주세요!',500))
    }

    render() {
        return(
            <View style={styles.container}>
                <Image 
                    source={require('./icon.png')}
                    style={styles.icon} 
                />
                <Text style={styles.title}>For Marketing</Text>
                <TextInput 
                    style={styles.textInputButton}
                    onChangeText={(id) => this.setState({id})}
                    placeholder={this.state.idText}
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.textInputButton}
                    onChangeText={(pw) => this.setState({pw})}
                    placeholder={this.state.pwText}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <FooterButton 
                    buttonText="로그인"
                    onPress={this.handleLogin}
                />
                <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.makeAccountText}>계정 만들기</Text>
                </TouchableOpacity>
                <Toast ref="toast" />
            </View>
        )
    }
}