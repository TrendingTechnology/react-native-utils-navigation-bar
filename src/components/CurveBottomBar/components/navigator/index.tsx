/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { getPath } from './path';
const { width } = Dimensions.get('window');

export interface Props {
  style?: StyleProp<ViewStyle>;
  height: number;
  circleWidth?: number;
  bgColor?: string;
  initialRouteName: string;
  renderCircle: () => JSX.Element;
  tabBar: ({
    routeName,
    selectTab,
    navigation,
  }: {
    routeName: string;
    selectTab: string;
    navigation: (selectTab: string) => void;
  }) => React.ReactNode;
}

const defaultProps = {
  bgColor: 'gray',
};

const BottomBarComponent: React.FC<Props> = (props) => {
  const {
    style,
    height = 65,
    circleWidth = 60,
    bgColor,
    initialRouteName,
    tabBar,
    renderCircle,
  } = props;
  const [selectMenuItem, setSelectMenuItem] = useState(null);
  const [selectTab, setSelectTab] = useState<string>(initialRouteName);
  const [itemLeft, setItemLeft] = useState([]);
  const [itemRight, setItemRight] = useState([]);

  const _renderButtonCenter = () => {
    return <View style={{ bottom: height / 1.8 }}>{renderCircle()}</View>;
  };

  useEffect(() => {
    const children = props?.children as any[];
    const arrLeft: any = children.filter((item) => item.props.position === 'left');
    const arrRight: any = children.filter((item) => item.props.position === 'right');

    setItemLeft(arrLeft);
    setItemRight(arrRight);

    setRouteName(initialRouteName);
  }, []);

  const setRouteName = (name: string) => {
    setSelectTab(name);
    const children = props?.children as any[];
    const route = children.filter((item) => item.props.name === name);
    if (route.length > 0) {
      setSelectMenuItem(route[0].props.component);
    } else {
      setSelectMenuItem(children[0].props.component);
    }
  };

  const d = getPath(height, circleWidth >= 60 ? circleWidth : 60);
  if (d) {
    return (
      <SafeAreaView style={[styles.wrapContainer, { backgroundColor: bgColor }]}>
        <View style={styles.wrapContainer}>
          {selectMenuItem ? selectMenuItem : null}
          <View style={[styles.container, style]}>
            <Svg width={width} {...{ height }}>
              <Path fill={bgColor} {...{ d }} />
            </Svg>
            <View style={styles.main}>
              <View style={[styles.rowLeft, { height: height }]}>
                {itemLeft.map((item: any, index) => {
                  const routeName: string = item.props.name;

                  return (
                    <View style={{ flex: 1 }} key={index}>
                      {tabBar({
                        routeName,
                        selectTab: selectTab,
                        navigation: (selectTab: string) => {
                          setRouteName(selectTab);
                        },
                      })}
                    </View>
                  );
                })}
              </View>
              {_renderButtonCenter()}
              <View style={[styles.rowRight, { height: height }]}>
                {itemRight.map((item: any, index) => {
                  const routeName = item.props.name;
                  return (
                    <View style={{ flex: 1 }} key={index}>
                      {tabBar({
                        routeName,
                        selectTab: selectTab,
                        navigation: (selectTab: string) => {
                          setRouteName(selectTab);
                        },
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  return null;
};

BottomBarComponent.defaultProps = defaultProps;

export default BottomBarComponent;

const styles = StyleSheet.create({
  wrapContainer: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 0,
  },
  main: {
    width: width,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
