const test = 'TESTING REDUX';
const initialState = { name: 'Hola' }

export const actionsCreators = {
    showTest: () => ({ type: test }),
};

export const reducer = (state,action) => {
    state = state || initialState;

    if (action.type === test) {
        return { ...state, name: state.name + 'e'};
    }

    return state;
};