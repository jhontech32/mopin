import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { StyleProvider, Root } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

// import AsyncStorage from '@react-native-community/async-storage'
// import firebase from 'react-native-firebase'
// import GlobalFont from 'utils/customfont'
import getTheme from './node_modules/native-base/src/theme/components'
import material from './native-base-theme/variables/material.js'
import Routes from './src/Routes'
import store from './src/store'

class App extends Component {
  render () {
    LogBox.ignoreLogs(['Warning: ...'])
    // Ignore log notification by message
    LogBox.ignoreAllLogs()
    // Ignore all log notifications

    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(material)}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </StyleProvider>
        </Root>
      </Provider>
    )
  }
}
export default App
