import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  email: string;
}
