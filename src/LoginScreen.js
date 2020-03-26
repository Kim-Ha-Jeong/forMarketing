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

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            idText: '아이디',
            pwText: '비밀번호',
            id: '',
            pw: ''
        }
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
                    onPress={() => this.props.navigation.navigate('Main')} />
                <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.makeAccountText}>계정 만들기</Text>
                </TouchableOpacity>
            </View>
        )
    }
}