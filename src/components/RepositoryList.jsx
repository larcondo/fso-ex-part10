import { StyleSheet, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';

import { orderOptions } from '../utils/orderOptions';

import RepositoryListContainer from './RepositoryListContainer';

const styles = StyleSheet.create({
  basicText: {
    backgroundColor: 'white',
    paddingVertical: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

const ErrorText = ({ message }) => {
  const errorStyle = [styles.basicText, { color: 'red' }];

  return(
    <Text style={errorStyle}>
      { `Error! ${message}` }
    </Text>
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [queryText] = useDebounce(searchText, 500);
  const navigate = useNavigate();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      ...orderOptions.find(o => o.value === order).variable,
      searchKeyword: queryText
    },
    fetchPolicy: 'cache-and-network',
  });

  if (error) return <ErrorText message={error.message} />;

  const onPress = (id) => {
    navigate(`/repository/${id}`);
  };

  const onSearchChange = (query) => setSearchText(query);
  const onOrderChange = (value) => setOrder(value);

  return(
    <RepositoryListContainer
      repositories={data?.repositories}
      onPress={onPress}
      order={order}
      onOrderChange={onOrderChange}
      searchText={searchText}
      onSearchChange={onSearchChange}
      loading={loading}
    />
  );
};

export default RepositoryList;