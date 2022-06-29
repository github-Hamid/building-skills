import { createAction, props } from "@ngrx/store";

export const propertiesListPageChanged = createAction("pageChanged");
export const getPropertiesList = createAction("getPropertiesList");
export const getProperty = createAction("getProperty", props<{value : Object}>());
