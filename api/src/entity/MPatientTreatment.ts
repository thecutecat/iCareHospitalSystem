/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "./Base";
// import { ProductType } from "./ProductType";
import { IsNotEmpty, IsPositive } from "class-validator";

@Entity({name: 'mpatienttreatment'})
export class MPatientTreatment extends Base {
  @IsNotEmpty()
  @PrimaryColumn()
  treatmentid: Number;

  @IsNotEmpty()
  @Column()
  patientid: string;

  @IsNotEmpty()
  @Column()
  dateoftreatment: Date;

  @IsPositive()
  @Column({ type: "float" })
  cost: number;
}
