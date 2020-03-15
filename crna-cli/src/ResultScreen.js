import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './Style';

export default class Result extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>지난 인력표 보기</Text>
            </View>
        )
    }
}