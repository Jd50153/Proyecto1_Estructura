import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Esto utiliza localStorage por defecto
import gameReducer from './gameSlice/GameSlice'; // El slice que incluye los niveles

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['game'], // Solo se persistirá el reducer `game`
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

export const store = configureStore({
    reducer: {
        persistedData: persistedReducer, // Reducer con persistencia
    },
});

export const persistor = persistStore(store);
