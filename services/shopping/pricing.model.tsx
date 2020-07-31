export interface ProductPackage {
  productId: number;
  period: number;
  ssRefId: number;
  amount: number;
  credit: number;
  productCode: string;
  name: string;
  description: string;
  sender: number;
}

export interface Product {
  amount: number;
  standard: ProductPackage;
  corporate: ProductPackage;
  period: number;
}
export interface PricingProps {
  t: Function;
  packages: ProductPackage[];
  test: string;
}

export interface PackageAll {
  filter: string;
}


export interface ProductBuy {
  productId: number,
  productName: string,
  unitSms: number,
  credit: number,
  period: number,
  sendername: number
  amount: number,
  vat: number,
  total: number,
}

export interface FormBodyPayment{
  product_id: number,
  is_tax_invoice: string
}