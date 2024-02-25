/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Base } from './Base';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class ProductType extends Base {
  @IsNotEmpty()
  @PrimaryColumn()
  id: string;

  @IsNotEmpty()
  @Column()
  description: string;
}
