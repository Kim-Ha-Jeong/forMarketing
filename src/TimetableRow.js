import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './Style'
import TileButton from './TileButton'

export default class TimetableRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: "row" }} >
                <TileButton row={this.props.row} text={this.props.row} style={{ width: 30 }} dis="true" />
                <TileButton row={this.props.row} col="Mon"/>
                <TileButton row={this.props.row} col="Tue"/>
                <TileButton row={this.props.row} col="Wed"/>
                <TileButton row={this.props.row} col="Thu"/>
                <TileButton row={this.props.row} col="Fri"/>
            </View>
        )
    }
}