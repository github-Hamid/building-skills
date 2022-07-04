export interface DetailedProperty {
  address_area: string;
  address: string;
  total_offering: number;
  total_term: number;
  projected_annual_returns_min: number;
  img_src_main: string;
  images: Array<string>;
}

export interface PropertyList {
  totalCount: number;
  data: any;
}

export interface User {
  isAuthenticated: boolean;
  name: string;
  errorMessage: string;
}

export const detailedProperty: DetailedProperty = {
  address_area: '',
  address: '',
  total_offering: 0,
  total_term: 0,
  projected_annual_returns_min: 0,
  img_src_main: '',
  images: [],
};

export const propertyList: PropertyList = {
  totalCount: 0,
  data: [],
};

export const user: User = {
  isAuthenticated: false,
  name: '',
  errorMessage: '',
};
