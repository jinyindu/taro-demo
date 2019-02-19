import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'

import iconBasic from '../../assets/images/icon-list-basic.png'

import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)

    this.state = {
      list: [
        {
          id: 'map',
          title: '地图组件',
          content: '地图组件',
          icon: iconBasic
        }
      ]
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { list } = this.state

    return (
      <View className='page page-index'>
        <View className='logo'>

        </View>
        <View className='page-title'>多端小程序案例</View>
        <View className='module-list'>
          {list.map((item, index) => (
            <View
              className='module-list__item'
              key={index}
              data-id={item.id}
              data-name={item.title}
              data-list={item.subpages}
              onClick={this.gotoPanel}
            >
              <View className='module-list__icon'>
                <Image src={item.icon} className='img' mode='widthFix' />
              </View>
              <View className='module-list__info'>
                <View className='title'>{item.title}</View>
                <View className='content'>{item.content}</View>
              </View>
              <View className='module-list__arrow'>
                <Text className='at-icon at-icon-chevron-right' />
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

export default Index
