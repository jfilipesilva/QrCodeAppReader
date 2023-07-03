import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.BG_WHITE,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_GREY,
    marginBottom: 20,
  },
  titleText: {
    textAlign: 'center',
  },
});
