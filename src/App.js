import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  //console.log(cash)

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payloud: cash})
  }

  const getCash = (cash) => {
    dispatch({type:'GET_CASH',payloud: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id:Date.now(),
    }
    dispatch({type: 'ADD_CUSTOMER', payload:  customer})
  }

  const removeCustomer = (customer) => {
    dispatch({type: 'REMOVE_CUSTOMER', payload: customer.id })
  }

  return (
    <>
      <div className='app'>
        <div>{cash}</div>
          <button onClick={() => addCash(Number(prompt(cash)))}>Add cash</button>
          <button onClick={() => getCash(Number(prompt(cash)))}>Get cash</button>
          <button onClick={() => addCustomer(prompt())}>Add client</button>
          <button onClick={() => getCash(Number(prompt(cash)))}>Delete client</button>
      </div>

        {customers.length > 0 ?
          <div className='customers'>
            {customers.map(customer =>
              <div onClick={() => removeCustomer(customer)} className='customer' key={customer.id}>{customer.name}</div>
              )}
          </div>
          :
          <div>
            Dont have client!
          </div>
        }
    </>
  );
}

export default App;