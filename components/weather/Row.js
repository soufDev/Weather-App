import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import FadeView from '../animation/fadeView'

import moment from 'moment'

// import 'moment/locale/fr'

export default class Row extends React.Component  {
    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }

    day () {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date () {
        let date = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{date}</Text>
        )
    }
    icon (size = 50) {
      let type = this.props.day.weather[0].main.toLowerCase()
      let image
      switch (type) {
        case 'clouds':
            image = require('./icons/cloud.png')
            break;
        case 'rain':
            image = require('./icons/rain.png')
            break;
        default:
            image = require('./icons/sun.png')
      }
      return (
          <Image source={image} style={{width: size, height: size, borderColor: "#FFF"}} />
      )
    }


    render() {

      if (this.props.index === 0) {
          return (
              <FadeView delay={this.props.index * 50}>
                  <View style={[style.flex, style.view, style.firstView]}>
                    <View>
                      <Text style={ style.white }>{this.day()} {this.date()}</Text>
                      {this.icon(80)}
                    </View>
                    <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.temp.day - 273)}°C</Text>
                  </View>
              </FadeView>
          )
      } else {
          return (
              <FadeView delay={this.props.index * 50}>
                  <View style={[style.flex, style.view]}>
                    <View style={[style.flex, {paddingVertical: 10}]}>
                      <Text style={[style.white, {marginRight: 10}]}>{this.icon()}</Text>
                      <Text >{this.day()} {this.date()}</Text>
                    </View>
                    <Text style={style.temp}>{parseInt(this.props.day.temp.day - 273, 10)}°C</Text>
                  </View>
              </FadeView>
          )
      }
    }
}

const style = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    bold: {
        fontWeight: 'bold'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstView: {
        backgroundColor: '#e54b65'
    },
    view: {
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22
    }
})
