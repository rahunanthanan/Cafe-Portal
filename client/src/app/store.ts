import { configureStore, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cafesSlice from 'features/cafes/cafesSlice';
import employeesSlice from 'features/employees/employeesSlice';
import {rootSaga} from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cafes: cafesSlice,
    employees: employeesSlice,
  },
   middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
