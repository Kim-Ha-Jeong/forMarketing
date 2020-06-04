import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './Style'

export default class FooterButton extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <TouchableOpacity 
                style={[styles.basicButton, this.props.style]}
                onPress={this.props.onPress}
                >
                <Text style={styles.buttonText}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        )
    }
}