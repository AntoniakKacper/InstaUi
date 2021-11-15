import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './reducers/postReducer';
import stateReducer from './reducers/stateReducer';
import authReducer from './reducers/authReducer';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    stateRed: stateReducer,
    posts: postReducer,
    auth: authReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

const storeObject = { store, persistor }

export const persReducer = persistReducer(persistConfig, rootReducer);

export default storeObject;