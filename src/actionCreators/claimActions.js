import CLAIM_TYPES from '../types/claimTypes'
// People Dropping off a form (action creators)

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: CLAIM_TYPES.CREATE,
        payload: {
            name,
            amountOfMoneyToCollect
        }
    }
}

export {
    createClaim
}