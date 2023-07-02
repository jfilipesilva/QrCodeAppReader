import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useRef, useState} from 'react';
import BodyText from '../../components/molecules/body-text/BodyText';
import Button from '../../components/molecules/button/Button';
import Subtitle from '../../components/molecules/subtitle/Subtitle';
import Title from '../../components/molecules/title/Title';
import BottomSheet from '../../components/organisms/bottom-sheet/BottomSheet';
import ScreenLayout from '../../components/organisms/screen-layout/ScreenLayout';
import SearchableList from '../../components/organisms/searschable-list/SearchableList';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {qrCodesSlice} from '../../store/slices/qr-codes';
import {QrCode} from '../../store/slices/qr-codes/types';
import styles from './HistoryScreen.style';

const HistoryScreen: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {qrCodeList} = useAppSelector(state => state.qrCodes);

  const [qrCodeSelected, setQrCodeSelected] = useState<QrCode | undefined>(
    undefined,
  );
  // const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);

  // const [listData, setListData] = useState<QrCode[] | undefined>(qrCodeList);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // useEffect(() => {
  //   setListData(qrCodeList);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   setListData(qrCodeList);
  //   if (searchTerm) {
  //     const filteredListData = qrCodeList?.filter(item =>
  //       item.qrCode.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  //     );
  //     setListData(filteredListData);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchTerm, qrCodeList]);

  const onPressButton = () => {
    if (qrCodeSelected) {
      dispatch(qrCodesSlice.actions.removeQrCode(qrCodeSelected));
    }
    bottomSheetModalRef.current?.dismiss();
  };

  const onPressListItem = (item: QrCode) => {
    setQrCodeSelected(item);
    bottomSheetModalRef.current?.present();
  };

  return (
    <ScreenLayout title={'Scan History'}>
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
