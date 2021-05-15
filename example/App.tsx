/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CurveBottomBar } from 'react-native-utils-navigation-bar';

const ic_react = require('./assets/ic_react.png');

const ThemeScreen = props => {
  return (
    <View style={styles.container}>
      <CurveBottomBar.Navigator
        height={70}
        circleWidth={60}
        borderLeftRight={true}
        bgColor="black"
        initialRouteName="title 1"
        renderCircle={() => (
          <TouchableOpacity
            style={styles.btnCircle} onPress={() => alert('Click!')}>
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
                style={[styles.img,{
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
        <CurveBottomBar.Screen
          name="title 1"
          position="left"
          component={() => <View style={{ backgroundColor: 'gray', flex: 1 }} />}
        />
        <CurveBottomBar.Screen
          name="title 2"
          component={() => <View style={{ backgroundColor: '#48CEF6', flex: 1 }} />}
          position="left"
        />
        <CurveBottomBar.Screen
          name="title1 3"
          component={() => <View style={{ backgroundColor: 'gray', flex: 1 }} />}
          position="right"
        />
        <CurveBottomBar.Screen
          name="title 4"
          component={() => <View style={{ backgroundColor: '#48CEF6', flex: 1 }} />}
          position="right"
        />
      </CurveBottomBar.Navigator>
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
