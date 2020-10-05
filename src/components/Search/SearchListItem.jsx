import React, { useState } from 'react';

import loadingIcon from 'assets/images/loading.gif';

function SearchListItem(props) {
  const { item, details, onClick } = props;

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    onClick(details);
  }

  return (
    <li
      onClick={handleClick}
      className="search__list-item"
    >
      <div className="search__list-item--left">
        <strong>{item.properties.name}</strong>, {item.properties.region}, {item.properties.country}
      </div>
      {loading && <img src={loadingIcon} alt="Loading" className="search__list-item--right" />}
    </li>
  )
}

export default SearchListItem;
