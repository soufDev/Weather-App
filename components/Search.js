import React from 'react'
import {TextInput, View, Text, Image, Button, Keyboard} from 'react-native'
import style from '../style/style'

import {StackNavigator} from 'react-navigation'
import List from './List'

class Search extends React.Component {

    static navigationOptions = {
        title: 'City Search',
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{width: 20, height: 20}}/>
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            city: 'M\'sila'
        }
    }

    setCity(city) {
        this.setState({city})
    }

    submit() {
        Keyboard.dismiss()
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={() => this.submit()}
                    style={style.input}
                    value={this.state.city}
                />

                <Button onPress={() => this.submit()} title='Search' color={style.color}/>
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default StackNavigator({

  Search: {
      screen: Search,
      navigationOptions
  },
  Result: {
    screen: List,
    navigationOptions
  },
})