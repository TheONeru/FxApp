import * as React from 'react';
import TradeList from '../containers/TradeList';

const component:React.SFC = () => {
    return (
        <div className="mainsection">
          <h1>Trades</h1>
          <TradeList />
        </div>
    );
};

export default component;
