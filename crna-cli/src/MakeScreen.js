import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Style';

export default class Make extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>인력표 만들기</Text>
            </View>
        )
    }
}