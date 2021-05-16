import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  name: string;
  position: 'left' | 'right';
  component: () => JSX.Element;
}

const MenuItemComponent: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default MenuItemComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
