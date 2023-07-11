import {QrCode} from '../../../store/slices/qr-codes/types';

/**
 * Props for a searchable list component
 * @property {QrCode[]} data - An array of QrCode objects that will be displayed in the searchable list.
 * @property {(item: QrCode) => void} onPressListItem - The function that is called when a list item is pressed.
 * It takes an argument `item` of type `QrCode`, which represents the item that was pressed in the list.
 */
export type SearchableListProps = {
  data: QrCode[];
  onPressListItem: (item: QrCode) => void;
};
