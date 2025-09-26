import { IdName, Meta } from 'src/commonUtilits/CommonBaseEntity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    method: string;

    @Column(() => Meta)
    meta: Meta;

}
