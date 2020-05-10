import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './Style'
import BoothButton from './BoothButton'

export default class BoothRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: "row" }} >
                <BoothButton row={this.props.row} text={this.props.row} style={{ width: 30 }} dis="true" />
                <BoothButton row={this.props.row} col="Mon"/>
                <BoothButton row={this.props.row} col="Tue"/>
                <BoothButton row={this.props.row} col="Wed"/>
                <BoothButton row={this.props.row} col="Thu"/>
                <BoothButton row={this.props.row} col="Fri"/>
            </View>
        )
    }
}