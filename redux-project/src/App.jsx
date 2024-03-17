
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

function App() {
  const count = useSelector( state => state.counter.value );
  const dispatch = useDispatch();
  

  return (
    <>
      <h1>Hola mundo</h1>

      <div>

        <button onClick={ () => dispatch( increment() ) }>Increment</button>
        <span>{ count }</span>
        <button onClick={ () => dispatch( decrement() ) }>Decrement</button>
        <button onClick={ () => dispatch( incrementByAmount( 10 ) ) }>incrementBy10</button>

      </div>
    </>
  )
}

export default App
