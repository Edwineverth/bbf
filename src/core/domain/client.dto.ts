export interface ClientDto {
  address: string;
  blocked: string;
  cellPhone: string;
  channel: string;
  clientId: string;
  country: string;
  customerGroup: CustomerGroup;
  customerSchema: number;
  distrChan: string;
  division: string;
  fiscalCode1: string;
  fiscalCode2: string;
  frequency: boolean;
  frequencyDays: string;
  idPortfolio: string;
  immediateDelivery: boolean;
  industryCode: string;
  industryCode1: string;
  isEnrollment: boolean;
  name: string;
  name2: string;
  office: string;
  paymentCondition: string;
  paymentMethods: PaymentMethod[];
  priceGroup: string;
  priceList: string;
  routeId: string;
  salesOrg: string;
  supplyCenter: string;
  updateDate: UpdateDate;
  vendorGroup: string;
}

export interface CustomerGroup {
  group: string;
  group1: string;
  group2: string;
  group3: string;
  group4: string;
  group5: string;
}

export interface PaymentMethod {
  clientId: string;
  typeCredit: string;
  creditLimit: number;
  creditUsed: number;
  amountAvailable: number;
}

export interface UpdateDate {
  date: string;
}
