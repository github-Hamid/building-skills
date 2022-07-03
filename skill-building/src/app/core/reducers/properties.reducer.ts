import { detailedProperty, propertyList, user } from './../state/properties.state';
import { getPropertySuccess, getPropertiesListSuccess, loginSuccess, errorInLogin } from './../actions/properties.actions';
import { createReducer, on } from "@ngrx/store";



export const propertyReducer = createReducer(
  propertyList,
  on(getPropertiesListSuccess, (state, action)=>{
    console.log("state:", state, "action:", action);
   return {...state, totalCount : action.list.totalCount, data : action.list.data};
  })
)

export const detailedPropertyReducer = createReducer(
  detailedProperty,
  on(getPropertySuccess, (state, action)=>{
    console.log("state2: ", state, "action2:", action, "images in action:", action.property.images);
    return {...state,
    address_area : action.property.address_area,
    address : action.property.address,
    total_offering : action.property.total_offering,
    total_term : action.property.total_term,
    projected_annual_returns_min : action.property.projected_annual_returns_min,
    img_src_main : action.property.img_src_main,
    images : action.property.images
  }
  })
)


export const loginReducer = createReducer(
  user, on(loginSuccess, (state, action)=>{
  return {...state, name : action.name, isAuthenticated : true}
  })
)

export const loginErrorReducer = createReducer(
  user, on(errorInLogin, (state, action) => {
    return {...state, errorMessage : "Username or Password is incorrect"}
  })
)
