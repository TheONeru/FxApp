import { connect } from 'react-redux';
import Header from '../components/Header';
import { State } from '../reducers';

const mapStateToProps = (state:State[]) => {
    const length = state.length;
    const currentState = state[length - 1];
    return (
    {
        header : currentState.header,
    }
    );
};

export default connect(
    mapStateToProps,
    null,
)(Header);
