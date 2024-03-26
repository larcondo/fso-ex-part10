import React from 'react';
import { FlatList, StyleSheet, Pressable, Text, ActivityIndicator } from 'react-native';

import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import ItemSeparator from './ItemSeparator';

const styles = StyleSheet.create({
  noResultsText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingVertical: 20,
  },
  loadingIndicator: {
    paddingVertical: 20,
  }
});

const LoadingIndicator = () => <ActivityIndicator animating={true} size={'large'} style={styles.loadingIndicator}/>;

const NoResults = () => <Text style={styles.noResultsText}>No results</Text>;

class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader = () => (
    <RepositoryListHeader
      searchText={this.props.searchText}
      onSearchChange={this.props.onSearchChange}
      order={this.props.order}
      onOrderChange={this.props.onOrderChange}
    />
  );

  render() {
    const { repositories } = this.props;

    // Get the nodes from the edges array
    const repositoryNodes = repositories
      ? repositories.edges.map( edge => edge.node )
      : [];

    return(
      <FlatList
        data={repositoryNodes}
        style={{
          alignSelf: 'stretch',
        }}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return(
            <Pressable onPress={() => this.props.onPress(item.id)}>
              <RepositoryItem repo={item} />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        ListEmptyComponent={
          this.props.loading
            ? <LoadingIndicator />
            : <NoResults />
        }
      />
    );
  }
}

export default RepositoryListContainer;