export const initialState = {
    basket: [],
}

// Selector (helper function to grab what we need from data layer)
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

// reducer decides how to update the app's state
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket : [...state.basket, action.item],
            };
        
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );;
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cannot remove product (id: ${action.id}) because not in basket!`
                )
            }

            return {
                ...state, 
                basket: newBasket
            }

        
        default:
            return state;
    }
};

export default reducer;