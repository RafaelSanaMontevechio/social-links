import React from 'react';

import '../css/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <div className="">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
