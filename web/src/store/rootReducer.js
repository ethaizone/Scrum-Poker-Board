import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import app from './../modules/app/reducers'

const configReduxPersist = {
  key: 'root',
  storage
}

const rootReducer = persistCombineReducers(configReduxPersist, {
  app,
})

export default rootReducer
