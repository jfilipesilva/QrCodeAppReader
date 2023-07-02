import {render} from '@testing-library/react-native';
import React from 'react';
import TextBold from '../src/components/atoms/text-bold/TextBold';
import {colors} from '../src/theme/colors';

describe('TextBold component unit tests', () => {
  it('renders correctly', () => {
    render(<TextBold>Test Text</TextBold>);
  });

  it('renders the correct text', () => {
    const {getByText} = render(<TextBold>Hello World</TextBold>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('renders the correct text with the specified style', () => {
    const style = {fontSize: 20, color: colors.TEXT_DARK};
    const {getByText} = render(<TextBold style={style}>Hello World</TextBold>);
    const textElement = getByText('Hello World');
    expect(textElement).toHaveStyle(style);
  });
});
