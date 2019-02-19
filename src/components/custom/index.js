import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

//组件
import SliderBar from '../sliderBar/index'

export default class Custom extends Component{

  // componentWillMount(){
  //   console.log('Custom --- componentWillMount')
  // }

  // componentDidMount(){
  //   console.log('Custom --- componentDidMount')
  // }

  render(){
    const { name } = this.props
    return (
      <View>
        <SliderBar name={name}></SliderBar>
      </View>
    )
  }
}
