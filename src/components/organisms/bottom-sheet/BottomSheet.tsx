import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './BottomSheet.styles';
import {BottomSheetProps} from './BottomSheet.types';

const BottomSheet: React.FunctionComponent<BottomSheetProps> = props => {
  const {bottomSheetModalRef, children, onCLose} = props;

  // Snap points for the bottom sheet
  const snapPoints = useMemo(() => ['40%', '60%', '80%'], []);

  /* Returns the safe area insets for the current device, which represents the area of the
  screen that is not covered by system UI elements such as the status bar, navigation bar, or notch. */
  const insets = useSafeAreaInsets();

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={styles.modalBackground}
        style={styles.modalContainer}
        onDismiss={onCLose}>
        <ScrollView bounces={false}>
          <View
            style={[
              styles.contentContainer,
              {
                marginBottom: insets.bottom + 90,
              },
            ]}>
            {children}
          </View>
        </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheet;
