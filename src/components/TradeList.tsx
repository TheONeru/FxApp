import * as React from 'react';
import Trade from './Trade';
import { RATIO_TYPE, DIFF_TYPE, PIPS_TYPE } from '../constants/FilterTypes';
import { TradeState } from '../reducers';

type Props = {
    trades : TradeState[];
};

type State = {
    filter : string;
};

export default class TransactinoList extends React.Component<Props, State>  {
    constructor(props:Props) {
        super(props);
        this.state = {
            filter : RATIO_TYPE,
        };
    }

    handleSwitchFilter = () => {
        switch (this.state.filter){
        case RATIO_TYPE:
            this.setState({ filter : DIFF_TYPE });
            break;
        case DIFF_TYPE:
            this.setState({ filter : PIPS_TYPE });
            break;
        case PIPS_TYPE:
            this.setState({ filter : RATIO_TYPE });
            break;
        default:
            throw new Error('Unkown Filter');
        }
    }

    render() {
        return (
        <ul className="transaction-list">
            <li className="transaction-index">
                <div className="view">
                    <span className="instrument">Instrument</span>
                    <span className="side">Side</span>
                    <span className="units">Units</span>
                    <span className="price">Price</span>
                    <span className="rate">Rate</span>
                    <button className="PL" onClick={this.handleSwitchFilter}>
                    {this.state.filter}
                    </button>
                </div>
            </li>
            {this.props.trades.map((trade:TradeState) =>
            <Trade key={trade.id}
            trade={trade} filter={this.state.filter}/>,
            )}
        </ul>
        );
    }
}
