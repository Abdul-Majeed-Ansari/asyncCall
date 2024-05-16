import './App.css';
import Account from './components/Account';
import { useDispatch, useSelector } from 'react-redux'
import { getUserAccount } from './actions';

function App() {
    const amount = useSelector(state=>state.amount)
    const account = useSelector(state=>state)
    const dispatch = useDispatch();
  return (
    <div>
      <Account></Account>
      {account.pending ? <p>loading...</p>: account.error ? <p>{account.error}</p> : <h2 className='yellow'>Current Amount: ${amount}</h2>}
        
        <button type='button' onClick={()=>dispatch(getUserAccount(2))}>Init User Account</button>
    </div>
  );
}

export default App;
