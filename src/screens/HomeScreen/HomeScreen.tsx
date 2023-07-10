import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
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
import {qrCodesSlice} from '../../store/slices/qr-codes';
import styles from './HomeScreen.style';

const HomeScreen: React.FunctionComponent = () => {
  // States
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');
  const [scannedData, setScannedData] = useState<string | undefined>(undefined);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(true);

  // `useScanBarcodes` hook from the `vision-camera-code-scanner` library to scan QR codes.
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  // Uses `useAppDispatch` hook to get the dispatch function from the Redux store
  const dispatch = useAppDispatch();

  // This ref will be used to reference the `BottomSheetModal` component in the code
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();

  useEffect(() => {
    // Request permission to access the device's camera. */
    Camera.requestCameraPermission().then(async permission => {
      if (permission === 'denied') {
        await Linking.openSettings();
      }
      setCameraPermissionStatus(permission);
    });

    // Activates the camera every time this screen is visible
    navigation.addListener('focus', () => {
      setIsCameraActive(true);
    });

    // Deactivate the camera every time this screen is not visible to save battery and to stop unnecessary qr code reading
    navigation.addListener('blur', () => {
      setIsCameraActive(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The bottom sheet is activated whenever a new QR code is scanned
  useEffect(() => {
    if (barcodes.length > 0) {
      setScannedData(barcodes[0].displayValue); // get the value of the first barcode
      setIsCameraActive(false);
      bottomSheetModalRef.current?.present();
    }
  }, [barcodes]);

  // Setting the App to use the back camera
  const devices = useCameraDevices();
  const device = devices.back;

  // Save QRCode in Redux and dismisses the bottom sheet modal.
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

  // Renders HomeScreen layout
  return (
    <ScreenLayout title="Scan">
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
        bottomSheetModalRef={bottomSheetModalRef}
        onCLose={() => setIsCameraActive(true)}>
        <Title>Scan Result</Title>
        <BodyText>{scannedData}</BodyText>
        <Button onPress={onPressButton}>Save</Button>
      </BottomSheet>
    </ScreenLayout>
  );
};

export default HomeScreen;
