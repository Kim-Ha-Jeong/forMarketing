import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Button
} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';
import Row from './TimetableRow';
import TileButton from './TileButton';

export default class Timetable extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.arrow, this.props.style]}
          onPress={() => this.props.navigation.navigate('Main')}
        >
          <Ionicons name='ios-arrow-back' size={30} color='#ec1468' />
        </TouchableOpacity>
        <View style={{ flexDirection: "row",marginTop: 35 }}>
          <TileButton style={{ height: 30,width: 30 }} dis="true"/>
          <TileButton text="Mon" style={{ height: 30 }} dis="true"/>
          <TileButton text="Tue" style={{ height: 30 }} dis="true"/>
          <TileButton text="Wed" style={{ height: 30 }} dis="true"/>
          <TileButton text="Thu" style={{ height: 30 }} dis="true"/>
          <TileButton text="Fri" style={{ height: 30 }} dis="true"/>
        </View>
        <Row row="1"/>
        <Row row="2"/>
        <Row row="3"/>
        <Row row="4"/>
        <Row row="5"/>
        <Row row="6"/>
        <Row row="7"/>
        <Row row="8"/>
        <Row row="9"/>
      </View>
    )
  }
}