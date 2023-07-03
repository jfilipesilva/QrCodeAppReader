import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.BORDER_GREY,
    borderRadius: 100,
  },
  iconContainer: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 45,
    paddingLeft: 10,
    color: colors.TEXT_DARK,
  },
});

export default styles;
