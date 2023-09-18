export const FETCH_ITEMS = 'FETCH_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const fetchItems = () => ({
  type: FETCH_ITEMS,
});

export const createItem = (item) => ({
  type: CREATE_ITEM,
  payload: item,
});

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  payload: item,
});

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});
