export type ProductType = {
  id: string;
  name: string;
  images: string[];
};

export type ProductTypeList = {
  id: string;
  name: string;
  images: string[];
  category: string;
  company: string;
};

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
};

export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export type ProductBrands = {
  id: string;
  label: string;
};

export type BreadCrumb = {
  label: string;
};
