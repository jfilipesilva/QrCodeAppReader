import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useRef, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextMedium from '../../components/atoms/text-medium/TextMedium';
import BodyText from '../../components/molecules/body-text/BodyText';
import Button from '../../components/molecules/button/Button';
import Subtitle from '../../components/molecules/subtitle/Subtitle';
import Title from '../../components/molecules/title/Title';
import BottomSheet from '../../components/organisms/bottom-sheet/BottomSheet';
import ScreenLayout from '../../components/organisms/screen-layout/ScreenLayout';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {qrCodesSlice} from '../../store/slices/qr-codes';
import {QrCode} from '../../store/slices/qr-codes/types';
import {colors} from '../../theme/colors';
import styles from './HistoryScreen.style';

const HistoryScreen: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {qrCodeList} = useAppSelector(state => state.qrCodes);

  const [qrCodeSelected, setQrCodeSelected] = useState<QrCode | undefined>(
    undefined,
  );

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const onPressButton = () => {
    if (qrCodeSelected) {
      dispatch(qrCodesSlice.actions.removeQrCode(qrCodeSelected));
    }
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <ScreenLayout title={'Scan History'}>
      {qrCodeList.length > 0 ? (
        <FlatList
          data={qrCodeList}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  setQrCodeSelected(item.item);
                  bottomSheetModalRef.current?.present();
                }}>
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
      ) : (
        <BodyText textStyle={styles.emptyListText}>List is empty</BodyText>
      )}
      <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
        <Title>QR Code Details</Title>
        <Subtitle>Value</Subtitle>
        <BodyText>{qrCodeSelected?.qrCode}</BodyText>
        <Subtitle>Date</Subtitle>
        <BodyText>{qrCodeSelected?.date}</BodyText>
        <Button
          buttonContainerStyle={{backgroundColor: 'red'}}
          onPress={onPressButton}>
          Delete
        </Button>
      </BottomSheet>
    </ScreenLayout>
  );
};

export default HistoryScreen;
