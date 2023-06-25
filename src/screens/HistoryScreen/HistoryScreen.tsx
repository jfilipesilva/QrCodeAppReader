import React from 'react';
import {FlatList} from 'react-native';
import TextMedium from '../../components/atoms/text-medium/TextMedium';
import ScreenLayout from '../../components/organisms/screen-layout/ScreenLayout';
import {useAppSelector} from '../../hooks/hooks';

const HistoryScreen: React.FunctionComponent = () => {
  const {
    qrCodes: {qrCodeList},
  } = useAppSelector(state => state);

  return (
    <ScreenLayout title={'Scan History'}>
      <FlatList
        data={qrCodeList}
        renderItem={item => {
          return <TextMedium>{item.item.qrCode}</TextMedium>;
        }}
      />
    </ScreenLayout>
  );
};

export default HistoryScreen;
