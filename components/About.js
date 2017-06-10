import React from 'react'
import {Text, View, StyleSheet, ActivityIndicator, Image, Button} from 'react-native'
import style from '../style/style'

export default class About extends React.Component {
    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/user.png')} style={{width: 20, height: 20}}/>
        }
    };

    search() {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>About Weather App</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A distinctio fugit illo magni maiores
                    minus odio
                    placeat provident sint. Alias blanditiis consectetur ducimus enim eveniet illo molestiae mollitia
                    ratione
                    sunt?
                </Text>
                <Button onPress={() => this.search()} title="Search" color={style.color}/>
            </View>
        )
    }
}

