import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';
import ScreenLayout from '../src/components/organisms/screen-layout/ScreenLayout';
import {ScreenLayoutProps} from '../src/components/organisms/screen-layout/ScreenLayout.types';

jest.mock('react-native/Libraries/Components/StatusBar/StatusBar', () => {
  return 'StatusBar';
});

const createTestProps = (
  props: Partial<ScreenLayoutProps> = {},
): ScreenLayoutProps => {
  const defaultProps: ScreenLayoutProps = {
    title: 'Test Title',
    children: <Text>Test</Text>,
  };
  return {...defaultProps, ...props};
};

describe('ScreenLayout component unit test', () => {
  test('should render ScreenLayout correctly', () => {
    const props = createTestProps();
    const {getByText} = render(<ScreenLayout {...props} />);

    expect(getByText('Test')).toBeTruthy();
    expect(getByText('Test Title')).toBeTruthy();
  });
});
