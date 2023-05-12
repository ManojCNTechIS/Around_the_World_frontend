import{
  legacy_createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose

}from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { CategoriesReducer } from "../categories/reducers";
import { FavourotesReducer } from "../favourites/reducers";
import { PlacesReducer } from "../places/reducers";
export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      places: PlacesReducer,
      categories: CategoriesReducer,
      favourites: FavourotesReducer,
    }),
    composeWithDevTools(applyMiddleware(routerMiddleware(),
     thunk
    ),
    )
  )
}
