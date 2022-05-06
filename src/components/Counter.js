import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:'decrementby2'});
  };
  const toggleCounterHandler1 = () => {
    dispatch({type:'incrementby2'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={toggleCounterHandler1}>Increment By 2</button>
    </main>
  );
};

export default Counter;
