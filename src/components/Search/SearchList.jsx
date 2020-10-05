import React from 'react';

import SearchListItem from './SearchListItem';

const SearchList = props => {
  const { onClick, results, message } = props;

  let list = [];

  if (message) {
    list.push(<li className="search__message">{message}</li>)
  }

  if (results) {
    list.push(results.map(item => {
      const details = {
        location: {
          lat: item.geometry.coordinates[1],
          lon: item.geometry.coordinates[0]
        },
        name: item.properties.name
      }

      return <SearchListItem key={item.properties.id} item={item} details={details} onClick={onClick} />
    }));
  }

  return (
    <ul className="search__list">
      {list}
    </ul>
  )
}

export default SearchList;
