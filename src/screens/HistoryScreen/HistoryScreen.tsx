import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useRef, useState} from 'react';
import BodyText from '../../components/molecules/body-text/BodyText';
import Button from '../../components/molecules/button/Button';
import Subtitle from '../../components/molecules/subtitle/Subtitle';
import Title from '../../components/molecules/title/Title';
import BottomSheet from '../../components/organisms/bottom-sheet/BottomSheet';
import ScreenLayout from '../../components/organisms/screen-layout/ScreenLayout';
import SearchableList from '../../components/organisms/searchable-list/SearchableList';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {qrCodesSlice} from '../../store/slices/qr-codes';
import {QrCode} from '../../store/slices/qr-codes/types';
import styles from './HistoryScreen.style';

const HistoryScreen: React.FunctionComponent = () => {
  // Get the current list of QR codes from the Redux state
  const {qrCodeList} = useAppSelector(state => state.qrCodes);

  // States
  const [qrCodeSelected, setQrCodeSelected] = useState<QrCode | undefined>(
    undefined,
  );

  // Uses `useAppDispatch` hook to get the dispatch function from the Redux store
  const dispatch = useAppDispatch();

  // This ref will be used to reference the `BottomSheetModal` component in the code
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Dispatch an action to remove it from the list and dismiss the BottomSheetModal
  const onPressButton = () => {
    if (qrCodeSelected) {
      dispatch(qrCodesSlice.actions.removeQrCode(qrCodeSelected));
    }
    bottomSheetModalRef.current?.dismiss();
  };

  // When a list item is pressed shows a modal with the QRCode details
  const onPressListItem = (item: QrCode) => {
    setQrCodeSelected(item);
    bottomSheetModalRef.current?.present();
  };

  // Renders HistoryScreen layout
  return (
    <ScreenLayout title={'Scan History'}>
      {/* Only renders the searchable list if exist at least one QRCode  */}
      {qrCodeList.length > 0 ? (
        <SearchableList data={qrCodeList} onPressListItem={onPressListItem} />
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
