import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Content from './Content'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class Container extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Content />
      </View>
    )
  }
}
export default Container
