import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {fontStyle} from '../../../theme/fonts';

export const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_GREY,
    alignItems: 'center',
  },
  listItemText: {
    ...fontStyle.body,
    flex: 9,
    paddingRight: 5,
  },
  listItemIcon: {
    flex: 1,
  },
});
