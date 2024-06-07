import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TaxType {
  @Field()
  taxType: string;

  @Field()
  taxId: string;

  @Field()
  rate: number;
}

@ObjectType()
export class PriceType {
  @Field()
  full_price: number;

  @Field(() => [TaxType])
  taxes: TaxType[];
}

@ObjectType()
export class ItemType {
  @Field()
  sku: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  classification?: string;

  @Field()
  unitsPerBox: string;

  @Field({ nullable: true })
  minOrderUnits?: string;

  @Field()
  packageDescription: string;

  @Field()
  packageUnitDescription: string;

  @Field({ nullable: true })
  quantity_max_redeem: number;

  @Field({ nullable: true })
  redeem_unit: number;

  @Field({ nullable: true })
  order_reason_redeem: string;

  @Field({ nullable: true })
  sku_redeem: number;

  @Field(() => PriceType)
  price: PriceType;

  @Field()
  points: number;
}

@ObjectType()
export class PortfolioType {
  @Field()
  channel: string;

  @Field()
  country: string;

  @Field()
  customerCode: string;

  @Field(() => [ItemType])
  items: ItemType[];

  @Field()
  route: string;
}
