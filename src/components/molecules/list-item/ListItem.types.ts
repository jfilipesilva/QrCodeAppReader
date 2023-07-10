import {QrCode} from '../../../store/slices/qr-codes/types';

/**
 * Props for the ListItem component
 * @property {QrCode} item - Tepresents a QRcode object. It is used to pass the QR code data to the ListItem component.
 * @property {(item: QrCode) => void} onPress - This property is a function that will be called when the ListItem is
 * pressed. The argument `QrCode`represents the item being pressed.
 * @property {string} testID - The `testID` property is used for identify the component for testing purposes.
 */
export type ListItemProps = {
  item: QrCode;
  onPress: (item: QrCode) => void;
  testID: string;
};
