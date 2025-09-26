import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    amounts: number;

    @IsString()
    @IsNotEmpty()
    method: string;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsEmail()
    email: string;

    @IsString()
    cyd: string;
}
