import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../theme/colors';
import styles from './SearchFilterInput.styles';
import {SearchFilterInputProps} from './SearchFilterInput.types';

const SearchFilterInput: React.FunctionComponent<
  SearchFilterInputProps
> = props => {
  const {onChangeText, searchTerm} = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome name="search" size={20} color={colors.BORDER_GREY} />
      </View>
      <TextInput
        style={styles.input}
        value={searchTerm}
        placeholder="Search"
        placeholderTextColor={colors.TEXT_GREY}
        onChangeText={value => onChangeText(value)}
      />
    </View>
  );
};

export default SearchFilterInput;
