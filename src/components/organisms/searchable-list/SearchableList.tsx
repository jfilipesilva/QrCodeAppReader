import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {QrCode} from '../../../store/slices/qr-codes/types';
import ListItem from '../../molecules/list-item/ListItem';
import SearchFilterInput from '../../molecules/search-filter-input/SearchFilterInput';
import {SearchableListProps} from './SearchableList.types';

// This component contains a list with a input to perform a search on it
const SearchableList: React.FC<SearchableListProps> = props => {
  const {data, onPressListItem} = props;
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [listData, setListData] = useState<QrCode[]>(data);

  // Updates the `listData` state whenever the `data` prop changes.
  useEffect(() => {
    setListData(data);
  }, [data]);

  // Updates the `listData` state whenever the `searchTerm` or `data` prop changes.
  useEffect(() => {
    if (searchTerm) {
      const filteredListData = data.filter(item =>
        // `The toLowerCase()` ensures that it finds the value even if it's on uppercase
        item.qrCode.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setListData(filteredListData);
    } else {
      setListData(data);
    }
  }, [searchTerm, data]);

  return (
    <>
      <SearchFilterInput
        onChangeText={setSearchTerm}
        searchTerm={searchTerm}
        testID="search-input"
      />
      <FlatList
        testID="flat-list"
        data={listData}
        renderItem={item => {
          return (
            <ListItem
              testID="list-item"
              item={item.item}
              onPress={() => onPressListItem(item.item)}
            />
          );
        }}
      />
    </>
  );
};

export default SearchableList;
