import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cameraContainer: {
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  camera: {
    flex: 1,
  },
});

export default styles;
