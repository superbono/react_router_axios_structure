import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer1 from './reducers/reducer1';


const rootReducer = combineReducers({
    ...reducer1,
})

// export const saga = createSagaMiddleware();

// export function* rootSaga() {
//   yield all([mebrCompSaga()]);
// }

// export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk, saga)));
export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));