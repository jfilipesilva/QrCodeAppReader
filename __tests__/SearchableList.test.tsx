import '@testing-library/jest-native/extend-expect';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import SearchableList from '../src/components/organisms/searchable-list/SearchableList';
import {QrCode} from '../src/store/slices/qr-codes/types';

const date = new Date().toLocaleString('pt-PT');
const mockData: QrCode[] = [
  {qrCode: 'QRVALUE1', date, id: 1},
  {qrCode: 'QRVALUE2', date, id: 2},
  {qrCode: 'QRVALUE3', date, id: 3},
];
const mockOnPressListItem = jest.fn();

describe('SearchableList component unit tests', () => {
  it('renders the component correctly', () => {
    const {getByTestId} = render(
      <SearchableList data={mockData} onPressListItem={mockOnPressListItem} />,
    );

    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('flat-list')).toBeTruthy();
  });

  it('displays the correct items based on search term', () => {
    const {getByTestId, getAllByTestId} = render(
      <SearchableList data={mockData} onPressListItem={mockOnPressListItem} />,
    );

    const searchInput = getByTestId('search-input');
    fireEvent.changeText(searchInput, 'VALUE2');

    const listItems = getAllByTestId('list-item');
    expect(listItems.length).toBe(1);
    expect(listItems[0]).toHaveTextContent('VALUE2');
  });

  it('calls the onPressListItem function when an item is pressed', () => {
    const {getAllByTestId} = render(
      <SearchableList data={mockData} onPressListItem={mockOnPressListItem} />,
    );

    const listItems = getAllByTestId('list-item');
    fireEvent.press(listItems[0]);
    expect(mockOnPressListItem).toHaveBeenCalledWith(mockData[0]);
  });
});
