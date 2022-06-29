import { initialProperty } from './../state/properties.state';
import { createReducer, on } from "@ngrx/store";
import {getProperty} from "../actions/properties.actions"

const _propertyReducer = createReducer(
  initialProperty,
  on(getProperty, (state, action)=>{

  return {
...state
  }
  })
)

export function propertyReducer(state : any, action : any)
{
  return _propertyReducer(state, action);
}
