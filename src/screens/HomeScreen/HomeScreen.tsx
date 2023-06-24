import React, {useState} from 'react';
import {Linking, Text, View} from 'react-native';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';

const HomeScreen: React.FunctionComponent = () => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');

  console.log('Requesting camera permission...');

  Camera.requestCameraPermission().then(async permission => {
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setCameraPermissionStatus(permission);
  });

  const devices = useCameraDevices();
  const device = devices.back;
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>

      {device && <Camera style={{flex: 1}} isActive={true} device={device} />}
    </View>
  );
};

export default HomeScreen;
