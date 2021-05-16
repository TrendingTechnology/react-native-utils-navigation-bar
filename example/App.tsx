/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar } from 'react-native';
import { CurveBottomBar } from 'react-native-utils-navigation-bar';
const { width } = Dimensions.get('window');
const ic_react = require('./assets/ic_react.png');

StatusBar.setBarStyle('light-content');
const ThemeScreen = props => {
  return (
    <View style={styles.container}>
      <CurveBottomBar.Navigator
        style={{}}
        width={width}
        height={70}
        circleWidth={60}
        borderTopLeftRight={true}
        bgColor="black"
        initialRouteName="title1"
        renderCircle={() => (
          <TouchableOpacity
            style={styles.btnCircle} onPress={() => alert('Click!')}>
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
