import * as  React from 'react';
import { DIFF_TYPE, RATIO_TYPE, PIPS_TYPE } from '../constants/FilterTypes';
import { TradeState } from '../reducers';

type Props = {
    trade : TradeState;
    filter : string;
};

export default class TransactionItem extends React.Component<Props> {
    constructor(props:Props) {
        super(props);
    }
    classnames = (trade:TradeState) => {
        const PL = trade.PL < 0 ? 'trade-minus' : 'trade-plus';
        const side = trade.units < 0 ? 'side-minus' : 'side-plus';
        return PL.concat(' ', side);
    }
    render() {
        let element;
        switch (this.props.filter) {
        case DIFF_TYPE:
            element = (
            <div className="view">
                <span className="instrument">
                    {this.props.trade.instrument}
                </span>
                <span className="side">
                    {this.props.trade.side}
                </span>
                <span className="units">
                    {this.props.trade.units}
                </span>
                <span className="price">
                    {this.props.trade.pricing}
                </span>
                <span className="rate">
                {this.props.trade.rate}
                </span>
                <span className="PL">
                    {this.props.trade.PL}
                </span>
            </div>
            );
            break;
        case RATIO_TYPE:
            element = (
            <div className="view">
                <span className="instrument">
                    {this.props.trade.instrument}
                </span>
                <span className="side">
                    {this.props.trade.side}
                </span>
                <span className="units">
                    {this.props.trade.units}
                </span>
                <span className="price">
                    {this.props.trade.pricing}
                </span>
                <span className="rate">
                {this.props.trade.rate}
                </span>
                <span className="PL">
                    {this.props.trade.ratio}
                </span>
            </div>
            );
            break;
        case PIPS_TYPE:
            element = (
            <div className="view">
                <span className="instrument">
                    {this.props.trade.instrument}
                </span>
                <span className="side">
                    {this.props.trade.side}
                </span>
                <span className="units">
                    {this.props.trade.units}
                </span>
                <span className="price">
                    {this.props.trade.pricing}
                </span>
                <span className="rate">
                {this.props.trade.rate}
                </span>
                <span className="PL">
                    {this.props.trade.pips}
                </span>
            </div>
            );
            break;
        default:
            throw new Error('Unkwon Type');
        }
        return (
            <li className={this.classnames(this.props.trade)}>
                {element}
            </li>
        );
    }
}
