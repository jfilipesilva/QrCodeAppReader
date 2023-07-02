import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './BottomSheet.styles';
import {BottomSheetProps} from './BottomSheet.types';

const BottomSheet: React.FunctionComponent<BottomSheetProps> = props => {
  const {bottomSheetModalRef, children, onCLose} = props;

  const snapPoints = useMemo(() => ['40%', '60%', '80%'], []);

  const insets = useSafeAreaInsets();

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        style={{padding: 20}}
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
