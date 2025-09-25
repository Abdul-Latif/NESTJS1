import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) { }

    async create(createUserDto: CreateUserDto) {
        const res = await this.userRepository.save(createUserDto);
        return res;
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id: number) {
        return await this.userRepository.findOneBy({ id });
    }
    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update(id, updateUserDto);
    }
    async delete(id: number) {
        return await this.userRepository.delete(id);
    }
}