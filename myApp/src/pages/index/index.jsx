import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>

        <View>
          <lifestyle publicId="2021001198685455" />
        </View>
        
        <View>
          <life-follow sceneId="155b343a89b9425fab4958bc31df1321" />
        </View>
      </View>
    )
  }
}
