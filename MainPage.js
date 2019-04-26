import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { creatStore } from './store'

import { countReducer } from './countReducer'

import { increase, reduce, reset } from './actions/CounterAction'


const Store = creatStore(countReducer)

export default class MainPage extends Component {

    ScreenWidth = Dimensions.get('window').width
    ScreenHeight = Dimensions.get('window').height



    static navigationOptions = {
        title: '首页',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        this.updateCount()

        Store.subscribe(() => {
            this.updateCount()
        })
    }

    updateCount() {
        const state = Store.getState()
        this.setState({ count: state.count })
    }



    render() {
        return <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alingItems: 'center' }}>
            <View style={{ width: this.ScreenWidth, flexDirection: 'row', justifyContent: 'center', alingItems: 'center' }}>
                <TouchableOpacity style={{}}
                    onPress={() => {
                        Store.dispatch(reduce())
                    }}>
                    <Text style={{ fontSize: 24, color: '#333' }}>-</Text>
                </TouchableOpacity>

                <Text style={{ marginHorizontal: 100, fontSize: 16, color: '#333' }}>{this.state.count}</Text>

                <TouchableOpacity style={{}}
                    onPress={() => {
                        Store.dispatch(increase())
                    }}>
                    <Text style={{ fontSize: 24, color: '#333' }}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginTop: 50, backgroundColor: '#ff8800', justifyContent: 'center', alingItems: 'center' }}
                onPress={() => {
                    Store.dispatch(reset())
                }}>
                <Text style={{ fontSize: 12, color: '#333', paddingHorizontal: 20, paddingVertical: 5 }}>重置</Text>
            </TouchableOpacity>
        </View>
    }





}
