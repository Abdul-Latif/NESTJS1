import { IdName, Meta } from 'src/commonUtilits/CommonBaseEntity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,

} from 'typeorm';


@Entity()
export class User extends IdName {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('numeric')
    amounts: number;
    @Column({ length: 20 })
    method: string;
    @Column({ default: 'pending' })
    status: string;
    @Column()
    email: string;
    @Column(() => Meta) // embeded instead of extend because class can extend one class only 
    data: Meta;
    @Column({ nullable: true })
    cyd: string;

}
