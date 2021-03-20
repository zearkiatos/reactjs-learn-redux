import POLICY_TYPES from '../types/policyTypes';
const createPolicy = (name, amount) => {
    return { // Action (a form in our analogy)
       type: POLICY_TYPES.CREATE,
       payload: {
           name,
           amount
       }
    }
};

const deletePolicy = (name) => {
    return {
        type: POLICY_TYPES.DELETE,
        payload: {
            name
        }
    }
};

export {
    createPolicy,
    deletePolicy
}