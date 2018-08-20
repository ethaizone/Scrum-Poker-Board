import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const configureStore = preloadedState => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk]

  const store = createStore(
    rootReducer,
    preloadedState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer)
    })
  }

  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
