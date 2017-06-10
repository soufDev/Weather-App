import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

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
        pressColor: "#87474b",
        indicatorStyle: {
            height: 2,
            backgroundColor: "#FFF"
        },
        style: {
            backgroundColor: "#87474b",
            borderTopWidth: 1,
            borderColor: "#702a2e"
        }
    },
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <Tabs />
            </View>
        );
    }
}


