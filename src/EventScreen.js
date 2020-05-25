import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Row from './EventRow';
import MakeButton from './EventButton';

export default class Booth extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.arrow, this.props.style]}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Ionicons name='ios-arrow-back' size={30} color='#ec1468' />
                </TouchableOpacity>
                <Text>오프라인 행사 인력표</Text>
                <View style={{ flexDirection: "row", marginTop: 35 }}>
                    <MakeButton style={{ height: 30, width: 30 }} dis="true" />
                    <MakeButton text="Mon" style={{ height: 30 }} dis="true" />
                    <MakeButton text="Tue" style={{ height: 30 }} dis="true" />
                    <MakeButton text="Wed" style={{ height: 30 }} dis="true" />
                    <MakeButton text="Thu" style={{ height: 30 }} dis="true" />
                    <MakeButton text="Fri" style={{ height: 30 }} dis="true" />
                </View>
                <Row row="1" />
                <Row row="2" />
                <Row row="3" />
                <Row row="4" />
                <Row row="5" />
                <Row row="6" />
                <Row row="7" />
                <Row row="8" />
                <Row row="9" />
            </View>
        )
    }
}