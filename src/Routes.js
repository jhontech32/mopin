import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet, View, StatusBar, Platform
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import color from 'theme/color'

// Splash
import Splash from 'screens/Splash'

import TabBarItem from 'screens/components/TabBarItem'

// Content
import Home from 'screens/Home'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({
          focused
        }) => {
          let iconName
          let circleMenu
          let iconType

          if (route.name === 'Tanding') {
            // circleMenu = true
            iconType = 'Ionicons'
            iconName = focused
              ? 'football'
              : 'football'
          } else if (route.name === 'Tabel') {
            iconType = 'MaterialCommunityIcons'
            iconName = focused
              ? 'timetable'
              : 'timetable'
          } else if (route.name === 'Prediksi') {
            circleMenu = true
            iconType = 'MaterialCommunityIcons'
            iconName = focused
              ? 'notebook'
              : 'notebook'
          } else if (route.name === 'Tim') {
            iconType = 'MaterialCommunityIcons'
            iconName = focused
              ? 'account-group'
              : 'account-group'
          } else if (route.name === 'Lainnya') {
            iconType = 'Entypo'
            iconName = focused
              ? 'dots-three-horizontal'
              : 'dots-three-horizontal'
          }

          // You can return any component that you like here!
          return (
            <TabBarItem
              focused={focused}
              circleMenu={circleMenu}
              iconName={iconName}
              typeIcon={iconType}
            />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: color.primaryColor,
        inactiveTintColor: color.secondaryText
      }}
    >
      <Tab.Screen
        name="Tanding"
        component={Home}
      />
    </Tab.Navigator>
  )
}

class Routes extends Component {
  state = {
    isLoading: true
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)
  }

  render () {
    const { isLoading } = this.state
    // const { isFullScreen } = this.props

    if (isLoading) {
      return (
        <>
          <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={color.primaryColor} />
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          </Stack.Navigator>
        </>
      )
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={color.primaryColor} />
        <Stack.Navigator initialRouteName="MainApp">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          {/* MENU STACK */}
          <Stack.Screen
            name="MainApp"
            component={MainApp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Routes)
