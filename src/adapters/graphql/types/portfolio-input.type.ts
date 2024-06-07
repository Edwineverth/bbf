import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';

@InputType()
export class TaxInputType {
  @Field()
  @IsString()
  taxType: string;

  @Field()
  @IsString()
  taxId: string;

  @Field()
  @IsNumber()
  rate: number;
}

@InputType()
export class PriceInputType {
  @Field()
  @IsNumber()
  full_price: number;

  @Field(() => [TaxInputType])
  @IsObject()
  taxes: TaxInputType[];
}

@InputType()
export class ItemInputType {
  @Field()
  @IsString()
  sku: string;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  categoryId: string;

  @Field()
  @IsString()
  category: string;

  @Field()
  @IsString()
  brand: string;

  @Field()
  @IsString()
  classification: string;

  @Field()
  @IsString()
  unitsPerBox: string;

  @Field({ nullable: true })
  minOrderUnits?: string;

  @Field()
  @IsString()
  packageDescription: string;

  @Field()
  @IsString()
  packageUnitDescription: string;

  @Field({ nullable: true })
  @IsNumber()
  quantity_max_redeem?: number;

  @Field({ nullable: true })
  @IsNumber()
  redeem_unit?: number;

  @Field({ nullable: true })
  @IsString()
  order_reason_redeem?: string;

  @Field({ nullable: true })
  @IsNumber()
  sku_redeem?: number;

  @Field(() => PriceInputType)
  @IsObject()
  price: PriceInputType;

  @Field()
  @IsNumber()
  points: number;
}

@InputType()
export class PortfolioInputType {
  @Field()
  @IsString()
  channel: string;

  @Field()
  @IsString()
  country: string;

  @Field()
  @IsString()
  customerCode: string;

  @Field(() => [ItemInputType])
  @IsArray()
  items: ItemInputType[];

  @Field()
  @IsString()
  route: string;
}
