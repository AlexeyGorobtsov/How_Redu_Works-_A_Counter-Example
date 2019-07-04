import { connect } from 'react-redux';

import { increment } from './increment';
import { decrement } from './decrement';
import { Counter } from '../../components/counter';

const mapStateToProps = state => {
    const {counter} = state;

    return {count: counter.count}
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        increment: increment.bind(null, dispatch),
        decrement: decrement.bind(null, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);