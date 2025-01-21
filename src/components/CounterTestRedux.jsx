import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/CounterSlice.jsx';
import '../styles/counter-test-reducer.css'

export const CounterTestRedux = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.count);

    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <p>Count: {counter}</p>
        </div>
    );
}