import {render} from '@testing-library/react-native';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {styles as textBoldStyles} from '../src/components/atoms/text-bold/TextBold.styles';
import Title from '../src/components/molecules/title/Title';
import {styles} from '../src/components/molecules/title/Title.styles';
import {colors} from '../src/theme/colors';

describe('Title component unit tests', () => {
  it('renders correctly', () => {
    render(<Title>Test Text</Title>);
  });

  it('renders the correct text', () => {
    const {getByText} = render(<Title>Hello World</Title>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('renders the correct children', () => {
    const {getByText, rerender} = render(<Title>Initial Value</Title>);
    const initialTextElement = getByText('Initial Value');
    expect(initialTextElement).toBeDefined();

    rerender(<Title>New Value</Title>);
    const updatedTextElement = getByText('New Value');
    expect(updatedTextElement).toBeDefined();
  });

  it('applies the correct styles to the text', () => {
    const textStyle = {color: colors.TEXT_DARK};
    const {getByText} = render(
      <Title textStyle={textStyle}>Styled Text</Title>,
    );
    const textElement = getByText('Styled Text');
    expect(textElement).toHaveStyle(textStyle);
  });

  it('applies the correct styles to the container view', () => {
    const containerStyle = {backgroundColor: colors.BG_PRIMARY};
    const {getByTestId} = render(
      <Title titleContainerStyle={containerStyle}>Container View</Title>,
    );

    const mergedStyle = [styles.mainContainer, containerStyle];
    const containerElement = getByTestId('title-container');
    expect(containerElement.props.style).toEqual(mergedStyle);
  });

  it('renders correctly without the textStyle prop', () => {
    const {getByText} = render(<Title>Test Text</Title>);
    const textElement = getByText('Test Text');

    const mergedStyle: StyleProp<TextStyle> = [
      textBoldStyles.text,
      styles.title,
    ];

    expect(textElement.props.style).toEqual(mergedStyle);
  });

  it('renders correctly without the titleContainerStyle prop', () => {
    const {getByTestId} = render(<Title>Test Text</Title>);
    const containerElement = getByTestId('title-container');
    expect(containerElement.props.style).toEqual(styles.mainContainer);
  });
});
