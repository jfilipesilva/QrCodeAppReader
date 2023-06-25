import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextMedium from '../../components/atoms/text-medium/TextMedium';
import ScreenLayout from '../../components/organisms/screen-layout/ScreenLayout';
import {useAppSelector} from '../../hooks/hooks';
import {colors} from '../../theme/colors';
import styles from './HistoryScreen.style';

const HistoryScreen: React.FunctionComponent = () => {
  const {qrCodeList} = useAppSelector(state => state.qrCodes);

  return (
    <ScreenLayout title={'Scan History'}>
      <FlatList
        data={qrCodeList}
        renderItem={item => {
          return (
            <TouchableOpacity style={styles.listItem}>
              <TextMedium
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.listItemText}>
                {item.item.qrCode}
              </TextMedium>
              <FontAwesome
                name={'chevron-right'}
                style={styles.listItemIcon}
                color={colors.BORDER_GREY}
                size={20}
              />
            </TouchableOpacity>
          );
        }}
      />
    </ScreenLayout>
  );
};

export default HistoryScreen;
