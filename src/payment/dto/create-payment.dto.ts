import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreatePaymentDto {
    @IsNumber()
    @Max(20000)
    @Min(0)
    amount: number;

    @IsString()
    @IsNotEmpty()

    method: string;
}
