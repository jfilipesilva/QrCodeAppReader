import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Button from '../src/components/molecules/button/Button';
import {colors} from '../src/theme/colors';

describe('Button', () => {
  it('renders children correctly', () => {
    const {getByText} = render(<Button>Hello World</Button>);
    const buttonText = getByText('Hello World');
    expect(buttonText).toBeDefined();
  });

  it('calls onPress function when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<Button onPress={onPressMock}>Press Me</Button>);
    const button = getByText('Press Me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies custom styles to the button and text', () => {
    const textStyle = {color: colors.TEXT_GREY};
    const buttonContainerStyle = {backgroundColor: colors.BG_PRIMARY};
    const {getByTestId, getByText} = render(
      <Button textStyle={textStyle} buttonContainerStyle={buttonContainerStyle}>
        Styled Button
      </Button>,
    );
    const buttonElement = getByTestId('button');
    expect(buttonElement).toHaveStyle(buttonContainerStyle);
    const buttonText = getByText('Styled Button');
    expect(buttonText).toHaveStyle(textStyle);
  });
});
