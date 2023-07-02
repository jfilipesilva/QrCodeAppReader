import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Alert, Linking, View} from 'react-native';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import BodyText from '../../components/molecules/body-text/BodyText';
import Button from '../../components/molecules/button/Button';
import Title from '../../components/molecules/title/Title';
import BottomSheet from '../../components/organisms/bottom-sheet/BottomSheet';
import ScreenLayout from '../../components/organisms/screen-layout/ScreenLayout';
import {useAppDispatch} from '../../hooks/hooks';
import {CommonTabsContext} from '../../navigation/MainBottomTabs';
import {qrCodesSlice} from '../../store/slices/qr-codes';
import styles from './HomeScreen.style';

const HomeScreen: React.FunctionComponent = () => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');
  const [scannedData, setScannedData] = useState<string | undefined>(undefined);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(true);

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  const dispatch = useAppDispatch();

  const {bottomSheetModalRef} = useContext(CommonTabsContext);
  const navigation = useNavigation();

  useEffect(() => {
    Camera.requestCameraPermission().then(async permission => {
      if (permission === 'denied') {
        await Linking.openSettings();
      }
      setCameraPermissionStatus(permission);
    });
    navigation.addListener('focus', () => {
      setIsCameraActive(true);
    });
    navigation.addListener('blur', () => {
      setIsCameraActive(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (barcodes.length > 0) {
      setScannedData(barcodes[0].displayValue); // get the value of the first barcode
      setIsCameraActive(false);
      bottomSheetModalRef.current?.present();
    }
  }, [barcodes]);

  const devices = useCameraDevices();
  const device = devices.back;

  const onPressButton = () => {
    if (scannedData) {
      dispatch(
        qrCodesSlice.actions.addQrCode({
          id: 0,
          qrCode: scannedData,
          date: new Date().toLocaleDateString('pt-PT'),
        }),
      );
    }
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <ScreenLayout title="Qr Code Reader">
      {device && cameraPermissionStatus === 'authorized' && (
        <View style={styles.mainContainer}>
          <View style={styles.cameraContainer}>
            <Camera
              style={styles.camera}
              isActive={isCameraActive}
              device={device}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
              onError={error => {
                console.log(error);
                Alert.alert('An error occur while reading the QR Code.');
              }}
            />
          </View>
        </View>
      )}
      <BottomSheet
        bottomSheetModalRef={bottomSheetModalRef!}
        onCLose={() => setIsCameraActive(true)}>
        <Title>Scan Result</Title>
        <BodyText>{scannedData}</BodyText>
        <Button onPress={onPressButton}>Save</Button>
      </BottomSheet>
    </ScreenLayout>
  );
};

export default HomeScreen;
