import {render} from '@testing-library/react-native';
import React from 'react';
import TextMedium from '../src/components/atoms/text-medium/TextMedium';
import {colors} from '../src/theme/colors';
import TextBold from '../src/components/atoms/text-bold/TextBold';

describe('<TextMedium />', () => {
  it('renders without errors', () => {
    render(<TextBold>Test Text</TextBold>);
  });

  it('renders the correct text', () => {
    const {getByText} = render(<TextMedium>Hello World</TextMedium>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('renders the correct text with the specified style', () => {
    const style = {fontSize: 20, color: colors.TEXT_DARK};
    const {getByText} = render(
      <TextMedium style={style}>Hello World</TextMedium>,
    );
    const textElement = getByText('Hello World');
    expect(textElement).toHaveStyle(style);
  });
});
