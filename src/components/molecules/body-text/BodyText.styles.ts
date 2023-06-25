import {StyleSheet} from 'react-native';
import {fontStyle} from '../../../theme/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
  },
  bodyText: {
    ...fontStyle.body,
  },
});
