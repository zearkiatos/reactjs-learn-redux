import CLAIM_TYPES from '../types/claimTypes';
import POLICY_TYPES from '../types/policyTypes';
// Reducers (Departments)

const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === CLAIM_TYPES.CREATE) {
        // we care about this action (FORM!)
        // oldListOfClaims.push(action.payload) = modified the array
        return [...oldListOfClaims, action.payload]
    }

    // we don't care the action (form!!)
    return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === CLAIM_TYPES.CREATE) {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    }
    else if (action.type === POLICY_TYPES.CREATE) {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
    if (action.type === POLICY_TYPES.CREATE) {
        return [...listOfPolicies, action.payload.name]
    }
    else if (action.type === POLICY_TYPES.DELETE) {
        return listOfPolicies.filter(name => name !== action.payload.name)
    }

    return listOfPolicies;
}

export {
    claimsHistory,
    accounting,
    policies
}