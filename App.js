/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'

import MainPage from './MainPage'


export default class App extends Component {

  stackNav = null
  AppContainer = null
  constructor(props) {
    super(props)
    this.state = {

    }

    this.initNav()

  }


  initNav() {
    this.stackNav = createStackNavigator({
      Main: { screen: MainPage }
    }, {
        initialRouteName: 'Main',
      })

    this.AppContainer = createAppContainer(this.stackNav)
  }


  render() {
    return <this.AppContainer />
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
