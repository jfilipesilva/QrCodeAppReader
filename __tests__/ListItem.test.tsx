import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import ListItem from '../src/components/molecules/list-item/ListItem';
import {QrCode} from '../src/store/slices/qr-codes/types';

// Mocks
const date = new Date().toLocaleString('pt-PT');
const mockItem: QrCode = {id: 1, date, qrCode: 'QRVALUE'};
const mockOnPress = jest.fn();
const mockTestId = 'list-item';

describe('ListItem', () => {
  it('renders the component correctly', () => {
    const {getByTestId, getByText} = render(
      <ListItem item={mockItem} onPress={mockOnPress} testID={mockTestId} />,
    );

    expect(getByText('QRVALUE')).toBeTruthy();
    expect(getByTestId('list-item-icon')).toBeTruthy();
  });

  it('calls the onPress function with the correct item when pressed', () => {
    const {getByTestId} = render(
      <ListItem item={mockItem} onPress={mockOnPress} testID={mockTestId} />,
    );

    const listItem = getByTestId(mockTestId);

    fireEvent.press(listItem);

    expect(mockOnPress).toHaveBeenCalledWith(mockItem);
  });
});
