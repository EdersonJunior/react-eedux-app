import { FETCH_ITEMS, CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/itemActions';

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state };

    case CREATE_ITEM:
      const newItem = action.payload;
      return {
        ...state,
        items: [...state.items, newItem],
      };

    case UPDATE_ITEM:
      const updatedItem = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      return {
        ...state,
        items: updatedItems,
      };

    case DELETE_ITEM:
      const itemIdToDelete = action.payload;
      const filteredItems = state.items.filter((item) => item.id !== itemIdToDelete);
      return {
        ...state,
        items: filteredItems,
      };

    default:
      return state;
  }
};

export default itemReducer;
