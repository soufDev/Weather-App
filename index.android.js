/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    StatusBar,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Search from "./components/Search";
import About from "./components/About";
import {TabNavigator} from 'react-navigation';

const Tabs = TabNavigator({
    Search: {screen: Search},
    About: {screen: About},
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        pressColor: "#178756",
        indicatorStyle: {
            height: 2,
            backgroundColor: "#FFF"
        },
        style: {
            backgroundColor: "#14705c",
            borderTopWidth: 1,
            borderColor: "#007050"
        }
    },
});

export default class app extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <Tabs />

            </View>
        );
    }
}


AppRegistry.registerComponent('app', () => app);
