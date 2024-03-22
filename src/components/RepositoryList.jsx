import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';

import { orderOptions } from '../utils/orderOptions';

import LoadingText from './LoadingText';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ErrorText = ({ message }) => {
  const errorStyle = [styles.basicText, { color: 'red' }];

  return(
    <Text style={errorStyle}>
      { `Error! ${message}` }
    </Text>
  );
};

export const RepositoryListContainer = ({ repositories, picker }) => {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map( edge => edge.node )
    : [];

  const onPress = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return(
          <Pressable onPress={() => onPress(item.id)}>
            <RepositoryItem repo={item} />
          </Pressable>
        );
      }}
      keyExtractor={item => item.id}
      ListHeaderComponent={picker}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState(0);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: orderOptions.find(o => o.value === order).variable,
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <LoadingText />;
  if (error) return <ErrorText message={error.message} />;

  return <RepositoryListContainer
    repositories={data.repositories}
    picker={<OrderPicker selected={order} setSelected={setOrder} />}
  />;
};

const OrderPicker = ({ selected, setSelected }) => {
  return(
    <View>
      <Picker
        prompt='Select an ordering principle...'
        selectedValue={selected}
        onValueChange={(itemValue) => setSelected(itemValue)}
      >
        { orderOptions.map((o) => {
          return <Picker.Item label={o.text} value={o.value} key={o.id} />;
        })}
      </Picker>
    </View>
  );
};

export default RepositoryList;