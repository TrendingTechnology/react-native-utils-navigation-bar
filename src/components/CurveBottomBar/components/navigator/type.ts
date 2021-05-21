import { StyleProp, ViewStyle } from 'react-native';

interface Props {
    type?: 'CURVE_DOWN' | 'CURVE_UP';
    style?: StyleProp<ViewStyle>;
    width?: number;
    height?: number;
    borderTopLeftRight?: boolean;
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
    }) => JSX.Element;
}

export type CurveBottomBar = React.FC<Props>