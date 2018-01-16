import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const configureStore = preloadedState => {
  const middlewares = [thunk]

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )

  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
