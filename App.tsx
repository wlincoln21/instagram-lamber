import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {

    const comments = [
      {
        nickname: 'Aline Andrade',
        comment: 'Excelente Foto'
      },
      {
        nickname: 'Beatriz Duraes',
        comment: 'Excelente Foto 1'
      },
      {
        nickname: 'Elias Durães',
        comment: 'Top'
      },
    ]

    return (
      <>
        <View style={{ flex: 1 }}>
          <Header />
          <Post
            image={require('./assets/imgs/fence.jpg')}
            comments={comments}
          />
        </View>

      </>
    )
  }
}