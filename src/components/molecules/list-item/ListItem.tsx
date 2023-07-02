import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../theme/colors';
import TextMedium from '../../atoms/text-medium/TextMedium';
import {styles} from './ListItem.styles';
import {ListItemProps} from './ListItem.types';

const ListItem: React.FC<ListItemProps> = props => {
  const {item, onPress, testID} = props;
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => onPress(item)}
      testID={testID}>
      <TextMedium
        ellipsizeMode="tail"
        numberOfLines={1}
        style={styles.listItemText}>
        {item.qrCode}
      </TextMedium>
      <FontAwesome
        name={'chevron-right'}
        style={styles.listItemIcon}
        color={colors.BORDER_GREY}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default ListItem;
