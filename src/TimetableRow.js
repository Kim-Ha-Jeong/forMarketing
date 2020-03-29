import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './Style'
import TileButton from './TileButton'

export default class TimetableRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: "row" }} >
                <TileButton text={this.props.row} style={{ width: 30 }} dis="true" />
                <TileButton text={this.props.row} col="Mon"/>
                <TileButton text={this.props.row} col="Tue"/>
                <TileButton text={this.props.row} col="Wed"/>
                <TileButton text={this.props.row} col="Thu"/>
                <TileButton text={this.props.row} col="Fri"/>
            </View>
        )
    }
}