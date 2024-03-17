import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
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
  const [scannedData, setScannedData] = useState<string | undefined>(undefined);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(true);
  const {hasPermission, requestPermission} = useCameraPermission();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes.length > 0) {
        setIsCameraActive(false);
        setScannedData(codes[0].value); // get the value of the first barcode
        bottomSheetModalRef.current?.present();
      }
    },
  });

  // Uses `useAppDispatch` hook to get the dispatch function from the Redux store
  const dispatch = useAppDispatch();

  // This ref will be used to reference the `BottomSheetModal` component in the code
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();

  useEffect(() => {
    // Request permission to access the device's camera. */
    requestPermission();

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

  // Setting the App to use the back camera
  const device = useCameraDevice('back');

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
      {device && hasPermission && (
        <View style={styles.mainContainer}>
          <View style={styles.cameraContainer}>
            <Camera
              style={styles.camera}
              isActive={isCameraActive}
              codeScanner={codeScanner}
              device={device}
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
