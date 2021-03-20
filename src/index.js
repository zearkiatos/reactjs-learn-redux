import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createPolicy, deletePolicy } from './actionCreators/policyActions';
import { createClaim } from './actionCreators/claimActions';
import store from './store';

store.dispatch(createPolicy('Alex', 20));
console.log(store.getState());
store.dispatch(createPolicy('Jim', 30));
console.log(store.getState());
store.dispatch(createPolicy('Bob', 40));
console.log(store.getState());

store.dispatch(createClaim('Alex', 120));
console.log(store.getState());
store.dispatch(createClaim('Jim', 50));
console.log(store.getState());

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());





ReactDOM.render(<App />,document.querySelector('#root'));