/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { CurveBottomBar } from 'react-native-utils-navigation-bar';
const ic_react = require('./assets/ic_react.png');

StatusBar.setBarStyle('light-content');

const ThemeScreen = props => {
  const [type, setType] = useState<'CURVE_DOWN' | 'CURVE_UP'>('CURVE_DOWN');

  const onClickButton = () => {
    if (type === 'CURVE_UP') {
      setType('CURVE_DOWN');
      alert('Change type curve down');
    } else {
      setType('CURVE_UP');
      alert('Change type curve up');
    }
  }

  const _renderCurve = () => {
    return <CurveBottomBar.Navigator
      type={type}
      height={70}
      circleWidth={60}
      bgColor="black"
      borderTopLeftRight={true}
      initialRouteName="title1"
      renderCircle={() => (
        <TouchableOpacity
          style={[type === 'CURVE_DOWN' ? styles.btnCircle : styles.btnCircleUp]} onPress={onClickButton}>
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


  return (
    <View style={styles.container}>
      {_renderCurve()}
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
