import Taro, { Component } from '@tarojs/taro'
import { View,Map } from '@tarojs/components'

import './index.less'

export default class MapComponent extends Component{
  constructor(){
    super(...arguments)
    this.state = {
      latitude:'',
      longitude:'',
      scale:'18',
      markers:[{
        "id": 0,
        "title": "去这里",
        "iconPath": require('../../assets/images/food-off.png'),
        "latitude": 30.273923,
        "longitude": 120.12703,
        "width": 68,
        "height": 68,
        "zIndex": 99999
      }]
    }
  }

  componentWillMount(){
    Taro.getLocation({ type: "gcj02" }).then(res => {
      this.setState({
        longitude: res.longitude,
        latitude: res.latitude
      })

      console.log(res)
    })
  }

  componentDidMount(){
    this.mapCtx = Taro.createMapContext('map')
    this.movetoPosition()
  }

  movetoPosition(){
    this.mapCtx.moveToLocation()
  }

  bindmarkertap =()=>{

  }

  render () {

    const { latitude,longitude,scale,controls,polyline,markers } = this.state
    return (
      <View className='container'>
        <Map id='map'
          latitude={latitude}
          longitude={longitude}
          scale={scale}
          controls={controls}
          polyline={polyline}
          markers={markers}
          bindmarkertap={this.bindmarkertap}
          show-location
        />
      </View>
    )
  }
}
