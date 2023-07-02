import {QrCode} from '../../../store/slices/qr-codes/types';

export type SearchableListProps = {
  data: QrCode[];
  onPressListItem: (item: QrCode) => void;
};
