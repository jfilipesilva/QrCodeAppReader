import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {fontStyle} from '../../../theme/fonts';
import {themeStyle} from '../../../theme/style';

export const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    backgroundColor: colors.BG_PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: themeStyle.BORDER_RADIUS,
  },
  buttonText: {
    ...fontStyle.button,
    color: colors.TEXT_WHITE,
  },
});
