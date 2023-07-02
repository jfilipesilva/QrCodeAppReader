import {QrCode} from '../../../store/slices/qr-codes/types';

export type ListItemProps = {
  item: QrCode;
  onPress: (item: QrCode) => void;
  testID: string;
};
