# react-native-utils-navigation-bar

## Getting started

`$ yarn add react-native-utils-navigation-bar react-native-svg`

### Start IOS

cd ios && pod install

### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/navigationbar/demo.gif)

## Usage
```javascript
    import React, { useState } from 'react';
    import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
    import { CurveBottomBar } from 'react-native-utils-navigation-bar';
    import Ionicons from 'react-native-vector-icons/Ionicons';

    StatusBar.setBarStyle('dark-content');

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

        const _renderIcon = (routeName: string, selectTab: string) => {
            let icon = '';

            switch (routeName) {
                case 'title1':
                    icon = 'ios-home-outline';
                    break;
                case 'title2':
                    icon = 'apps-outline';
                    break;
                case 'title3':
                    icon = 'bar-chart-outline';
                    break;
                case 'title4':
                    icon = 'person-outline';
                    break;
            }

            return (
                <Ionicons name={icon} size={30} color={routeName === selectTab ? '#FF3030' : 'gray'} />
            );
        };

        return (
            <View style={styles.container}>
            <CurveBottomBar.Navigator
                type={type}
                height={60}
                circleWidth={60}
                bgColor="white"
                borderTopLeftRight={true}
                initialRouteName="title1"
                renderCircle={() => (
                    <TouchableOpacity
                        style={[type === 'CURVE_DOWN' ? styles.btnCircle : styles.btnCircleUp]} onPress={onClickButton}>
                        <Ionicons name="chatbubbles-outline" size={30} />
                    </TouchableOpacity>
                )}
                tabBar={({ routeName, selectTab, navigation }) => {
                return (
                    <TouchableOpacity
                    onPress={() => navigation(routeName)}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {_renderIcon(routeName, selectTab)}
                    </TouchableOpacity>
                );
                }}>
                <CurveBottomBar.Screen
                    name="title1"
                    position="left"
                    component={() => <View style={{ backgroundColor: '#E8E8E8', flex: 1 }} />}
                />
                <CurveBottomBar.Screen
                    name="title2"
                    component={() => <View style={{ backgroundColor: '#E8E8E8', flex: 1 }} />}
                    position="left"
                />
                <CurveBottomBar.Screen
                    name="title3"
                    component={() => <View style={{ backgroundColor: '#E8E8E8', flex: 1 }} />}
                    position="right"
                />
                <CurveBottomBar.Screen
                    name="title4"
                    component={() => <View style={{ backgroundColor: '#E8E8E8', flex: 1 }} />}
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
            backgroundColor: 'white',
            bottom: 40
        },
        btnCircleUp: {
            width: 70,
            height: 70,
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E8E8E8',
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

```

## Source code example
https://github.com/hoaphantn7604/react-native-utils-navigation-bar/tree/master/example
