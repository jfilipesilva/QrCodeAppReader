import {render} from '@testing-library/react-native';
import React from 'react';
import TextRegular from '../src/components/atoms/text-regular/TextRegular';
import {colors} from '../src/theme/colors';

describe('<TextRegular />', () => {
  it('renders the correct text', () => {
    const {getByText} = render(<TextRegular>Hello World</TextRegular>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('renders the correct text with the specified style', () => {
    const style = {fontSize: 20, color: colors.TEXT_DARK};
    const {getByText} = render(
      <TextRegular style={style}>Hello World</TextRegular>,
    );
    const textElement = getByText('Hello World');
    expect(textElement).toHaveStyle(style);
  });
});
