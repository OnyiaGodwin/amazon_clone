export const initialState = {
  basket: [],
  user: null,
};

// Selector using reduce(): This calculates the total price
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// Selector using map(): This calculates the total price
/*
export const getBasketTotal = (basket) => {
    let amount = 0;
    basket?.map((item) => {
        amount += item.price;
    })
    return amount
}
*/

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "EMPTY_BASKET":
        return {
          ...state,
          basket: [],
        };

    case "REMOVE_ITEM_FORM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) basket!`);
      }

      return {
        ...state,
        basket: newBasket,
      }

      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  

    default:
      return state;
  }
};

export default reducer;
