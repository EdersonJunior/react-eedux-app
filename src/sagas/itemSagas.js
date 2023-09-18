import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_ITEMS, createItem, updateItem, deleteItem } from '../actions/itemActions';

function* fetchItemsSaga() {
  const mockItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  yield put(createItem(mockItems));
}

function* createItemSaga(action) {
  const newItem = { id: Date.now(), ...action.payload };
  yield put(createItem(newItem));
}

function* updateItemSaga(action) {
  yield put(updateItem(action.payload));
}

function* deleteItemSaga(action) {
  yield put(deleteItem(action.payload));
}

function* itemSagas() {
  yield takeLatest(FETCH_ITEMS, fetchItemsSaga);
  yield takeLatest(CREATE_ITEM, createItemSaga);
  yield takeLatest(UPDATE_ITEM, updateItemSaga);
  yield takeLatest(DELETE_ITEM, deleteItemSaga);
}

export default itemSagas;
