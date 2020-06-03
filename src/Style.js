import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#feecf3',
    },
    row: {
        flexDirection : 'row',
    },
    icon: {
        width: 75,
        height: 75,
        marginBottom: 35
    }, 
    title: {
        marginBottom: 35,
        fontSize: 18,
        color: '#ec1468',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInputButton: {
        width: 288,
        borderColor: '#feecf3',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50
    },
    basicButton :{
        width: '80%',
        height: 40,
        backgroundColor: '#ec1468',
        marginTop: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: -1,
        paddingTop: 0
    },
    noAccountText: {
        marginTop: '10%',
        fontSize: 13,
        color: '#5B5A5A'
    },
    makeAccountText: {
        marginTop: '1%',
        fontSize: 13,
        color: '#ec1468',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12,
        color: '#ec1468',
        textAlign:'center',
        marginTop: '8%',
        marginBottom: '3%'
    },
    mainButton: {
        height: '6.5%'
    },
    settingText: {
        fontSize: 12,
        color: '#5B5A5A',
        marginTop: 25,
    },
    settingDesc: {
        fontSize: 12,
        color: '#5B5A5A',
        marginTop: 15,
        marginBottom: 170
    },
    arrow: {
        position: 'absolute',
        left: 18,
        top: 35,
    },
    signUpTitle: {
        fontSize: 18,
        color: '#ec1468',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 35
    },
    tileButton: {
        backgroundColor: '#fff',
        width: 75,
        height: 55,
        borderWidth: 1,
        borderColor: '#feecf3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tileText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: -1,
        paddingTop: 0
    },
    makeText: {
        color: 'black',
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: -1,
        paddingTop: 0
    },
})

export default styles;