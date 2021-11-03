const initialState = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingItemIndex];
    let updatedCartItems;

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updatedCartItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }

    return {
      items: updatedCartItems,
      totalAmount: totalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
  }

  return initialState;
};
