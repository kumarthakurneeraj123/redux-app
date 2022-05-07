import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:'incrementby5'});
  };
  const toggleCounterHandler1 = () => {
    dispatch({type:'decrementby5'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Increment By 5</button>
      <button onClick={toggleCounterHandler1}>Decrement By 5</button>
    </main>
  );
};

export default Counter;
