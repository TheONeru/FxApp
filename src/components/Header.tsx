import * as React from 'react';
import { HeaderState } from '../reducers';

type Props = {
    header : HeaderState;
};

const header:React.SFC<Props> = (props:Props) => {
    return (
        <header className="header">
          <h1>Account</h1>
          <p>純資産：{props.header.NAV}(円)</p>
          <p>預金：{props.header.balance}(円)</p>
          <p>未確定損益：{props.header.unrealizedPL}(円)</p>
        </header>
    );
};

export default header;
