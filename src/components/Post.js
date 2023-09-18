import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import Autor from './Autor'
import Comments from './Comments'
import AddComment from './AddComment'



export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image} />
        <Autor email='wesleylincoln14@outlook.com' nickname='Wesley Lincoln' />
        <Comments comments={this.props.comments} />
        <AddComment />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain'
  }
})