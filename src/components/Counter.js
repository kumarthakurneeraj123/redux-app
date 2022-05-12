import classes from './Counter.module.css';
import { counterActions } from '../store';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const counter = useSelector(state=>state.counter.counter);
  const show = useSelector(state=>state.counter.showCounter);
  console.log(counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const toggleCounterHandler1 = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler =()=>{
    dispatch(counterActions.increase(10));
  }
  const toggle = ()=>{
      dispatch(counterActions.toggleCounter());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <button onClick={increaseHandler}>Increment By 10</button>
      <button onClick={toggleCounterHandler}>Increment By 1</button>
      <button onClick={toggleCounterHandler1}>Decrement By 1</button>
      <div>
      <button onClick={toggle}>toggle</button>
      </div>
    </main>
  );
};

export default Counter;
