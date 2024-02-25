/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import { PrimaryGeneratedColumn, Entity, Column, PrimaryColumn, JoinColumn, OneToOne } from "typeorm";
import { Base } from "./Base";
import { IsNotEmpty, Length, IsEmail } from "class-validator";

@Entity()
export class mpatient extends Base {
 // @IsNotEmpty() 
 @PrimaryGeneratedColumn()
 // @PrimaryColumn()
  //@Column() 
  id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  dateofbirth: Date;

  @IsNotEmpty() @Length(10, 10)
  @Column()
  gender: string;
  
}
