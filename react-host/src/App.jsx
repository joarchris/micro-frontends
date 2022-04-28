import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CounterWrapper from 'remote/CounterWrapper';

import './index.scss';

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    CounterWrapper(divRef.current);
  }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>React Host</div>
      <div ref={divRef}> </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
