export const initialState = {
    basket: [],
}

// reducer decides how to update the app's state
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket : [...state.basket, action.item],
            };
        
        default:
            return state;
    }
};

export default reducer;