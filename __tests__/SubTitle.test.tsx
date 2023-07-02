import {render} from '@testing-library/react-native';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {styles as textBoldStyles} from '../src/components/atoms/text-bold/TextBold.styles';
import Subtitle from '../src/components/molecules/subtitle/Subtitle';
import {styles} from '../src/components/molecules/subtitle/Subtitle.styles';
import {colors} from '../src/theme/colors';

describe('Subtitle component unit tests', () => {
  it('renders correctly', () => {
    render(<Subtitle>Test Text</Subtitle>);
  });

  it('renders the correct text', () => {
    const {getByText} = render(<Subtitle>Hello World</Subtitle>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('renders the correct children', () => {
    const {getByText, rerender} = render(<Subtitle>Initial Value</Subtitle>);
    const initialTextElement = getByText('Initial Value');
    expect(initialTextElement).toBeDefined();

    rerender(<Subtitle>New Value</Subtitle>);
    const updatedTextElement = getByText('New Value');
    expect(updatedTextElement).toBeDefined();
  });

  it('applies the correct styles to the text', () => {
    const textStyle = {color: colors.TEXT_DARK};
    const {getByText} = render(
      <Subtitle textStyle={textStyle}>Styled Text</Subtitle>,
    );
    const textElement = getByText('Styled Text');
    expect(textElement).toHaveStyle(textStyle);
  });

  it('applies the correct styles to the container view', () => {
    const containerStyle = {backgroundColor: colors.BG_PRIMARY};
    const {getByTestId} = render(
      <Subtitle subtitleContainerStyle={containerStyle}>
        Container View
      </Subtitle>,
    );

    const containerElement = getByTestId('subtitle-container');
    expect(containerElement.props.style).toEqual(containerStyle);
  });

  it('renders correctly without the textStyle prop', () => {
    const {getByText} = render(<Subtitle>Test Text</Subtitle>);
    const textElement = getByText('Test Text');

    const mergedStyle: StyleProp<TextStyle> = [
      textBoldStyles.text,
      styles.subtitle,
    ];

    expect(textElement.props.style).toEqual(mergedStyle);
  });

  it('renders correctly without the subtitleContainerStyle prop', () => {
    const {getByTestId} = render(<Subtitle>Test Text</Subtitle>);
    const containerElement = getByTestId('subtitle-container');
    expect(containerElement.props.style).toBeUndefined();
  });
});
