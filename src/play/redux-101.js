import { createStore } from 'redux';

// Action generators - functions that return action objects

// const incrementCount = (payload = {}) => ({ 
//   type: "INCREMENT",
//   inc: typeof payload.inc === "number"? payload.inc : 1
// });  => isto sto i...

const incrementCount = ({inc = 1} = {}) => ({ 
  type: "INCREMENT",
  inc // isto sto i...   inc: inc
});

const decramentCount = ({dec = 1} = {}) => ({
  type: "DECRAMENT",
  dec
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
     return {
        count: state.count + action.inc
      };
    case "DECRAMENT":
      return {
        count: state.count - action.dec
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      }
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// Action

// store.dispatch({
//   type: "INCREMENT",
//   inc: 5
// });

store.dispatch(incrementCount({ inc: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decramentCount({dec:9}));

store.dispatch(decramentCount());

store.dispatch(setCount({count: 105}));