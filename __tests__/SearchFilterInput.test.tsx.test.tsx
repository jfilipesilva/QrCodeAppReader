import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import SearchFilterInput from '../src/components/molecules/search-filter-input/SearchFilterInput';

describe('SearchFilterInput component unit tests', () => {
  it('renders correctly', () => {
    const onChangeTextMock = jest.fn();

    const {getByPlaceholderText} = render(
      <SearchFilterInput onChangeText={onChangeTextMock} />,
    );
    const inputElement = getByPlaceholderText('Search');
    expect(inputElement).toBeDefined();
  });

  it('calls onChangeText function with the entered value', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchFilterInput onChangeText={onChangeTextMock} />,
    );
    const inputElement = getByPlaceholderText('Search');
    const enteredText = 'Test';
    fireEvent.changeText(inputElement, enteredText);
    expect(onChangeTextMock).toHaveBeenCalledWith(enteredText);
  });
});
