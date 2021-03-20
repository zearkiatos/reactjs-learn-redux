import React from 'react';
import { } from 'redux'

// People Dropping off a form (action creators)

const createPolicy = (name, amount) => {
    return { // Action (a form in our analogy)
       type: 'CREATE_POLICY',
       payload: {
           name,
           amount
       }
    }
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfMoneyToCollect
        }
    }
}

export default () => {
    return (
        <div>
            <h1>Hello React ⚛️ </h1>
        </div>
    );
};