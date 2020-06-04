import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './Style'
import MakeButton from './EventButton'

export default class BoothRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: "row" }} >
                <MakeButton row={this.props.row} text={this.props.row} style={{ width: 30 }} dis="true" />
                <MakeButton row={this.props.row} col="Mon"/>
                <MakeButton row={this.props.row} col="Tue"/>
                <MakeButton row={this.props.row} col="Wed"/>
                <MakeButton row={this.props.row} col="Thu"/>
                <MakeButton row={this.props.row} col="Fri"/>
            </View>
        )
    }
}