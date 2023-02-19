import { configureStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { cafesSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(cafesSaga);

export default store;
