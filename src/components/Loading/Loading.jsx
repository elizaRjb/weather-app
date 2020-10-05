import React from 'react';

import loadingIcon from 'assets/images/loading.gif';

const Loading = props => {
  const { message } = props;

  return (
    <div className="loading">
      <img src={loadingIcon} alt="Loading" />
      <span>{message}</span>
    </div>
  )
}

export default Loading;
