import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { StatusCode } from '../typings/blog';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn() //  自
  id: number;

  @Column({
    length: 50,
  })
  title: string;

  @Column({
    length: 20,
  })
  author: string;

  @Column('enum', { enum: StatusCode })
  isPublished: StatusCode;

  @CreateDateColumn()
  createDate: Date;
}
