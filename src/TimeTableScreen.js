import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Make extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.arrow, this.props.style]}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Ionicons name='ios-arrow-back' size={30} color='#ec1468' />
                </TouchableOpacity>
                <Text>시간표 만들기</Text>
                
            </View>
        )
    }
}