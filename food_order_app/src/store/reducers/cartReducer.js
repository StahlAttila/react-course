const initialState = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
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
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const itemToRemoveIndex = state.items.findIndex(item => item.id === action.id);
    const itemToRemove = state.items[itemToRemoveIndex];
    const updatedTotalAmount = state.totalAmount - itemToRemove.price;
    let updatedCartItems;

    if(itemToRemove.amount > 1) {
      const updatedCartItem = {...itemToRemove, amount: itemToRemove.amount -1};
      updatedCartItems = [...state.items];
      updatedCartItems[itemToRemoveIndex] = updatedCartItem;
    } else {
      updatedCartItems = state.items.filter(item => item.id !== action.id);
    }

    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount
    }
     
  }

  return initialState;
};
