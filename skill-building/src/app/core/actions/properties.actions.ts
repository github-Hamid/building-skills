import { DetailedProperty, PropertyList } from './../state/properties.state';
import { createAction, props } from '@ngrx/store';

export const getPropertiesList = createAction(
  '[Properties] Get list',
  props<{ limit: number; offset: number }>()
);
export const getProperty = createAction(
  '[Property] Get detailed',
  props<{ property_slurp: string }>()
);
export const getPropertiesListSuccess = createAction(
  '[Properties] Get list success',
  props<{ list: PropertyList }>()
);
export const getPropertySuccess = createAction(
  '[Property] Get success',
  props<{ property: DetailedProperty }>()
);
export const login = createAction(
  'login',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  'login success',
  props<{ name: string }>()
);
export const errorInLogin = createAction('login error');
