import { connect } from 'react-redux';
import TradeList from '../components/TradeList';
import { State } from '../reducers';

const mapStateToProps = (state:State[]) => {
    const length = state.length;
    const currentState = state[length - 1];
    return (
    {
        trades : currentState.trades,
    }
    );
};

export default connect(
    mapStateToProps,
    null,
)(TradeList);
