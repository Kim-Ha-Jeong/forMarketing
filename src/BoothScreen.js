import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Row from './BoothRow';
import BoothButton from './BoothButton';
import Button from './FooterButton';
import firebase from 'react-native-firebase';

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
                <Text>개강/홍보부스 인력표</Text>
                <View style={{ flexDirection: "row", marginTop: 35 }}>
                    <BoothButton style={{ height: 30, width: 30 }} dis="true" />
                    <BoothButton text="Mon" style={{ height: 30 }} dis="true" />
                    <BoothButton text="Tue" style={{ height: 30 }} dis="true" />
                    <BoothButton text="Wed" style={{ height: 30 }} dis="true" />
                    <BoothButton text="Thu" style={{ height: 30 }} dis="true" />
                    <BoothButton text="Fri" style={{ height: 30 }} dis="true" />
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