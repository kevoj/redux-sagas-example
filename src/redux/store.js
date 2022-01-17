// Libs
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
// Reducers
import todoReducers from './reducers/todoReducers';
// Sagas
import todoSagas from './sagas/todoSagas';

// Add Reducers
const reducers = {
  todo: todoReducers,
};

// Add Sagas
function* rootSaga() {
  yield all([...todoSagas]);
}

// config
const rootReducer = persistCombineReducers(
  {
    key: `root-name`,
    storage,
    whitelist: ['todo'],
  },
  reducers
);

// middlewares
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

// devtools
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

// enhancers
const enhancers = composeEnhancers(
  applyMiddleware(...middlewares, sagaMiddleware)
  // other store enhancers if any
);

// store
const store = createStore(rootReducer, enhancers);

// persistor
const persistor = persistStore(store);

// Run saga
sagaMiddleware.run(rootSaga);

export { store, persistor };
