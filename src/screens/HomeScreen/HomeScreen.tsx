import React, {useEffect, useState} from 'react';
import {Linking, Text, View} from 'react-native';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import ScreenLayout from '../../components/organisms/screen-layout/ScreenLayout';
import styles from './HomeScreen.style';

const HomeScreen: React.FunctionComponent = () => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  useEffect(() => {
    console.log('Requesting camera permission...');
    Camera.requestCameraPermission().then(async permission => {
      console.log(`Camera permission status: ${permission}`);

      if (permission === 'denied') {
        await Linking.openSettings();
      }
      setCameraPermissionStatus(permission);
    });
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;
  return (
    <ScreenLayout title="Qr Code Reader">
      {device && (
        <View style={styles.mainContainer}>
          <View style={styles.cameraContainer}>
            <Camera
              style={styles.camera}
              isActive={true}
              device={device}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
            />
          </View>

          {barcodes.map((barcode, idx) => (
            <Text key={idx} style={{color: 'black', fontSize: 20}}>
              {barcode.displayValue}
            </Text>
          ))}
        </View>
      )}
    </ScreenLayout>
  );
};

export default HomeScreen;
