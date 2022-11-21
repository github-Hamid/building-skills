import {
  detailedProperty,
  propertyList,
  user,
} from './../state/properties.state';
import {
  getPropertySuccess,
  getPropertiesListSuccess,
  loginSuccess,
  errorInLogin,
} from './../actions/properties.actions';
import { createReducer, on } from '@ngrx/store';

// reducer on property list action when is successful
export const propertyReducer = createReducer(
  propertyList,
  on(getPropertiesListSuccess, (state, action) => {
    return {
      ...state,
      totalCount: action.list.totalCount,
      data: action.list.data,
    };
  })
);

// reducer on get property action when is successful
export const detailedPropertyReducer = createReducer(
  detailedProperty,
  on(getPropertySuccess, (state, action) => {
    return {
      ...state,
      address_area: action.property.address_area,
      address: action.property.address,
      total_offering: action.property.total_offering,
      total_term: action.property.total_term,
      projected_annual_returns_min:
        action.property.projected_annual_returns_min,
      img_src_main: action.property.img_src_main,
      images: action.property.images,
    };
  })
);

// reducer on login action when is successful
export const loginReducer = createReducer(
  user,
  on(loginSuccess, (state, action) => {
    localStorage.setItem('token', 'Hamid');
    return { ...state, name: action.name, isAuthenticated: true };
  })
);

// reducer on login action when is unsuccessful
export const loginErrorReducer = createReducer(
  user,
  on(errorInLogin, (state, action) => {
    return { ...state, errorMessage: 'Username or Password is incorrect' };
  })
);
