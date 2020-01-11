import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum StatusCode {
  UnPublished,
  isPublished,
}

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()  //  自
  id: number;

  @Column({
    length: 50,
  })
  title: string;

  @Column('enum', { enum: StatusCode })
  isPublished: StatusCode;

  @CreateDateColumn()
  createDate: Date;
}
