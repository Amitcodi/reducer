

import { useSelector, useDispatch } from 'react-redux';
import {inc,dec,res} from "../reduce/action/counterActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <>
      <h1>Counter use Redux</h1>
      <p>{state}</p>
      <button onClick={() => dispatch(inc())}>Increase</button>
      <button onClick={() => dispatch(dec())}>Decrease</button>
      <button onClick={() => dispatch(res())}>Reset</button>
    </>
  )
}

export default App
