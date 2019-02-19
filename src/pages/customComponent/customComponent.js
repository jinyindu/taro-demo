import Taro,{ Component } from "@tarojs/taro"
import { View,ScrollView,Swiper,SwiperItem,Icon,Textarea } from '@tarojs/components'

//组件
import Custom from '../../components/custom/index'

export default class CustomComponent extends Component{

  constructor(){
    super(...arguments)
    this.state = {
      name: 'tony'
    }
  }
  componentWillMount(){
    console.log('CustomComponent --- componentWillMount')
  }

  componentDidShow(){
    console.log('CustomComponent --- componentDidShow')
  }

  componentDidMount(){
    console.log('CustomComponent --- componentDidMount')
  }

  render(){
    return (
      <View>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='height: 150px;'
          lowerThreshold='20'
          upperThreshold='20'
        >
            <View style='height:150px;background-color:rgb(26,173,25);'>A</View>
            <View style='height:150px;background-color:rgb(39,130,215);'>B</View>
            <View style='height:150px;background-color:rgb(241,241,241);color: #333;'>C</View>
        </ScrollView>

        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
            <SwiperItem>
              <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
      <Icon size='60' type='success' />

      <Textarea autoHeight style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' />
      </View>
    )
  }
}
