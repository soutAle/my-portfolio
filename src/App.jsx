import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../src/redux/slices/CounterSlice.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const dispatch = useDispatch(); // Hook para despachar acciones
  const counter = useSelector((state) => state.counter.count); //hook para acceder a los datos de la store


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          count is {counter}
        </button>
        <div className="App">
          <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>

    </>
  )
}

export default App
