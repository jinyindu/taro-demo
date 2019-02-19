import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class SliderBar extends Component{

  render(){
    const {name} = this.props
    return (
      <View>
        {name}
      </View>
    )
  }
}
