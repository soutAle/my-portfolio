import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/CounterSlice.jsx';
import '../styles/counter-test-reducer.css'

export const CounterTestRedux = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.count);

    return (
        <div className='m-5 p-5 bg-gray-200 rounded-md'>
            <button className='bg-blue-500 text-white p-2 m-2 rounded-md' onClick={() => dispatch(increment())}>+</button>
            <button className='bg-blue-500 text-white p-2 m-2 rounded-md' onClick={() => dispatch(decrement())}>-</button>
            <button className='bg-blue-500 text-white p-2 m-2 rounded-md' onClick={() => dispatch(reset())}>Reset</button>
            <p>Count: {counter}</p>
        </div>
    );
}