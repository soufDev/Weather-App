import React from 'react'
import {Text, Image, ActivityIndicator, ListView} from 'react-native'
import WeatherRow from './weather/Row'

import style from '../style/style'
import axios from 'axios'

export default class List extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: `Weather / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{width: 20, height: 20}}/>
            }
        }
    }

    constructor(props) {
        super(props)
        //console.log('state', this.props.navigation.state.params.city.bold())
        this.state = {
          city: this.props.navigation.state.params.city,
          report: null
        }
        setTimeout(() => {
          this.fetchWeather()
        }, 1000)
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&APPID=0d7394e5ad54f659a31f760c6a5b1312`)
            .then((response) => {
              this.setState({report: response.data})
            })
    }

    render () {
        if (this.state.report === null) {
             return (
              <ActivityIndicator color={style.color} size="large"/>
             )
        }else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(rowData, i, index) => <WeatherRow day={rowData} index={parseInt(index, 10)}/>}
                />
            )
        }
    }
}