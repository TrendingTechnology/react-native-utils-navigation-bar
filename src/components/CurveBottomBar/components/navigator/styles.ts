import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapContainer: {
      flex: 1,
    },
    container: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
    },
    main: {
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
