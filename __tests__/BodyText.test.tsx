import {render} from '@testing-library/react-native';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {styles as textMediumStyles} from '../src/components/atoms/text-medium/TextMedium.styles';
import BodyText from '../src/components/molecules/body-text/BodyText';
import {styles} from '../src/components/molecules/body-text/BodyText.styles';
import {colors} from '../src/theme/colors';

describe('BodyText component unit tests', () => {
  it('renders correctly', () => {
    render(<BodyText>Test Text</BodyText>);
  });

  it('renders the correct text', () => {
    const {getByText} = render(<BodyText>Hello World</BodyText>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('renders the correct children', () => {
    const {getByText, rerender} = render(<BodyText>Initial Value</BodyText>);
    const initialTextElement = getByText('Initial Value');
    expect(initialTextElement).toBeDefined();

    rerender(<BodyText>New Value</BodyText>);
    const updatedTextElement = getByText('New Value');
    expect(updatedTextElement).toBeDefined();
  });

  it('applies the correct styles to the text', () => {
    const textStyle = {color: colors.TEXT_DARK};
    const {getByText} = render(
      <BodyText textStyle={textStyle}>Styled Text</BodyText>,
    );
    const textElement = getByText('Styled Text');
    expect(textElement).toHaveStyle(textStyle);
  });

  it('applies the correct styles to the container view', () => {
    const containerStyle = {backgroundColor: colors.BG_PRIMARY};
    const {getByTestId} = render(
      <BodyText bodyTextContainerStyle={containerStyle}>
        Container View
      </BodyText>,
    );
    const containerElement = getByTestId('body-text-container');
    expect(containerElement.props.style).toEqual(containerStyle);
  });

  it('renders correctly without the textStyle prop', () => {
    const {getByText} = render(<BodyText>Test Text</BodyText>);
    const textElement = getByText('Test Text');

    const mergedStyle: StyleProp<TextStyle> = [
      textMediumStyles.text,
      styles.bodyText,
    ];

    expect(textElement.props.style).toEqual(mergedStyle);
  });

  it('renders correctly without the bodyTextContainerStyle prop', () => {
    const {getByTestId} = render(<BodyText>Test Text</BodyText>);
    const containerElement = getByTestId('body-text-container');
    expect(containerElement.props.style).toBeUndefined();
  });
});
