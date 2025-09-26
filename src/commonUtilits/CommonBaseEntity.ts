import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class IdName {
    @PrimaryGeneratedColumn()
    tro: any;
}

export class Meta {
    @CreateDateColumn()
    DateCreated: Date;
    @UpdateDateColumn()
    DateUpdated: Date;
}