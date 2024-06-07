export interface PortfolioDto {
  channel: string;
  country: string;
  customerCode: string;
  items: Item[];
  route: string;
}

export interface Item {
  sku: string;
  title: string;
  categoryId: string;
  category: string;
  brand: string;
  classification: string;
  unitsPerBox: string;
  minOrderUnits?: string;
  packageDescription: string;
  packageUnitDescription: string;
  quantity_max_redeem?: any;
  redeem_unit?: any;
  order_reason_redeem?: any;
  sku_redeem?: any;
  price: Price;
  points: number;
}

export interface Price {
  full_price: number;
  taxes: Tax[];
}

export interface Tax {
  taxType: string;
  taxId: string;
  rate: number;
}
