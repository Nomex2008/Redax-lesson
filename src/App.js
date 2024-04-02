import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  //console.log(cash)

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payloud: cash})
  }

  const getCash = (cash) => {
    dispatch({type:'GET_CASH',payloud: cash})
  }

  return (
    <>
      <div className='app'>
        <div>{cash}</div>
          <button onClick={() => addCash(Number(prompt(cash)))}>Add cash</button>
          <button onClick={() => getCash(Number(prompt(cash)))}>Get cash</button>
      </div>
    </>
  );
}

export default App;