/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar } from 'react-native';
import { CurveUpBottomBar, CurveBottomBar } from 'react-native-utils-navigation-bar';
const { width } = Dimensions.get('window');
const ic_react = require('./assets/ic_react.png');

StatusBar.setBarStyle('light-content');

const ThemeScreen = props => {
  const [type, setType] = useState<'down' | 'up'>('up');

  const onClickButton = () => {
    if (type === 'up') {
      setType('down');
      alert('Change type curve down');
    } else {
      setType('up');
      alert('Change type curve up');
    }
  }

  const _renderCurveDown = () => {
    return <CurveBottomBar.Navigator
      height={70}
      circleWidth={60}
      bgColor="black"
      borderTopLeftRight={false}
      initialRouteName="title1"
      renderCircle={() => (
        <TouchableOpacity
          style={styles.btnCircle} onPress={onClickButton}>
          <Image source={ic_react} style={styles.imgCircle} />
        </TouchableOpacity>
      )}
      tabBar={({ routeName, selectTab, navigation }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation(routeName)}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={ic_react}
              style={[styles.img, {
                tintColor: routeName === selectTab ? '#48CEF6' : 'white',
              }]}
            />
            <Text
              style={{
                marginTop: 5,
                color: routeName === selectTab ? '#48CEF6' : 'white',
              }}>
              {routeName}
            </Text>
          </TouchableOpacity>
        );
      }}>
      <CurveBottomBar.Screen
        name="title1"
        position="left"
        component={() => <View style={{ backgroundColor: 'gray', flex: 1 }} />}
      />
      <CurveBottomBar.Screen
        name="title2"
        component={() => <View style={{ backgroundColor: '#48CEF6', flex: 1 }} />}
        position="left"
      />
      <CurveBottomBar.Screen
        name="title13"
        component={() => <View style={{ backgroundColor: 'gray', flex: 1 }} />}
        position="right"
      />
      <CurveBottomBar.Screen
        name="title4"
        component={() => <View style={{ backgroundColor: '#48CEF6', flex: 1 }} />}
        position="right"
      />
    </CurveBottomBar.Navigator>
  }

  const _renderCurveUp = () => {
    return <CurveUpBottomBar.Navigator
      style={{}}
      width={width}
      height={70}
      circleWidth={60}
      bgColor="black"
      initialRouteName="title1"
      renderCircle={() => (
        <TouchableOpacity
          style={styles.btnCircleUp} onPress={onClickButton}>
          <Image source={ic_react} style={styles.imgCircle} />
        </TouchableOpacity>
      )}
      tabBar={({ routeName, selectTab, navigation }) => {
        return (
          <TouchableOpacity
            onPress={() => routeName !== 'title4' ? navigation(routeName) : alert('onClick title4')}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={ic_react}
              style={[styles.img, {
                tintColor: routeName === selectTab ? '#48CEF6' : 'white',
              }]}
            />
            <Text
              style={{
                marginTop: 5,
                color: routeName === selectTab ? '#48CEF6' : 'white',
              }}>
              {routeName}
            </Text>
          </TouchableOpacity>
        );
      }}
    >
      <CurveUpBottomBar.Screen
        name="title1"
        position="left"
        component={() => <View style={{ backgroundColor: 'gray', flex: 1 }} />}
      />
      <CurveUpBottomBar.Screen
        name="title2"
        component={() => <View style={{ backgroundColor: '#48CEF6', flex: 1 }} />}
        position="left"
      />
      <CurveUpBottomBar.Screen
        name="title13"
        component={() => <View style={{ backgroundColor: 'gray', flex: 1 }} />}
        position="right"
      />
      <CurveUpBottomBar.Screen
        name="title4"
        component={() => <View style={{ backgroundColor: '#48CEF6', flex: 1 }} />}
        position="right"
      />
    </CurveUpBottomBar.Navigator>
  }

  return (
    <View style={styles.container}>
      {type === 'up' ? _renderCurveUp() : _renderCurveDown()}
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    bottom: 40
  },
  btnCircleUp: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    bottom: 18
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6'
  },
  img: {
    width: 30,
    height: 30,
  }
});
