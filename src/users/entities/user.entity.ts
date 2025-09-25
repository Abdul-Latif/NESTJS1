import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column('numeric')
    amount: number;
    @Column({ length: 20 })
    method: string;
    @Column({ default: 'pending' })
    status: string;
    @CreateDateColumn()
    CreatedAt: Date;
    @UpdateDateColumn()
    UpdatedAt: Date;
}
