import { createStore, combineReducers }  from 'redux';
import { accounting, policies, claimsHistory } from '../reducers/departmentReducers'

const ourDepartments = combineReducers({
    accounting,
    claimsHistory,
    policies
});

const store = createStore(ourDepartments);

export default store;