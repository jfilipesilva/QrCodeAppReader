import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Ref} from 'react';

/**
 * Represents the props for a bottom sheet
 * @property {Ref<BottomSheetModal>} bottomSheetModalRef - Reference to the`BottomSheetModal` component.
 * It is used to control the state and behavior of the bottom sheet modal.
 * @property {string} title - An optional string that represents the title of the bottom sheet.
 * @property {React.ReactNode} children - It's used to pass any React components or elements to be rendered inside the bottom sheet.
 * @property {() => void} onCLose - Is a function that will be called when the bottom sheet is closed.
 */
export type BottomSheetProps = {
  bottomSheetModalRef: Ref<BottomSheetModal>;
  title?: string;
  children?: React.ReactNode;
  onCLose?: () => void;
};
