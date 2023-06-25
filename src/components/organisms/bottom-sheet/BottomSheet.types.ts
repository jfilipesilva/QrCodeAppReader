import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Ref} from 'react';

export type BottomSheetProps = {
  bottomSheetModalRef: Ref<BottomSheetModal>;
  title?: string;
  children?: React.ReactNode;
  onCLose?: () => void;
};
