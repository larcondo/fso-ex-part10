import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import { orderOptions } from '../utils/orderOptions';

const RepositoryListHeader = (
  {
    searchText,
    onSearchChange,
    order,
    onOrderChange,
  }
) => {
  return(
    <View style={{ alignSelf: 'stretch' }}>
      <Searchbar
        placeholder='Search'
        value={searchText}
        onChangeText={onSearchChange}
        style={styles.searchBar}
        mode='bar'
        elevation={1}
      />
      <Picker
        prompt='Select an ordering principle...'
        selectedValue={order}
        onValueChange={(itemValue) => onOrderChange(itemValue)}
        style={styles.picker}
      >
        { orderOptions.map((o) => {
          return <Picker.Item label={o.text} value={o.value} key={o.id} />;
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fefefe',
  },
  picker: {
    marginHorizontal: 20,
    marginVertical: 6,
  }
});

export default RepositoryListHeader;