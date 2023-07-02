import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {QrCode} from '../../../store/slices/qr-codes/types';
import ListItem from '../../molecules/list-item/ListItem';
import SearchFilterInput from '../../molecules/search-filter-input/SearchFilterInput';
import {SearchableListProps} from './SearchableList.types';

const SearchableList: React.FC<SearchableListProps> = props => {
  const {data, onPressListItem} = props;
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [listData, setListData] = useState<QrCode[]>(data);

  useEffect(() => {
    setListData(data);
  }, [data]);

  useEffect(() => {
    if (searchTerm) {
      const filteredListData = data.filter(item =>
        item.qrCode.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setListData(filteredListData);
    } else {
      setListData(data);
    }
  }, [searchTerm, data]);

  return (
    <>
      <SearchFilterInput onChangeText={setSearchTerm} searchTerm={searchTerm} />
      <FlatList
        data={listData}
        renderItem={item => {
          return (
            <ListItem
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
