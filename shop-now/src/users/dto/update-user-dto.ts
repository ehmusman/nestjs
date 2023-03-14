import { IsString, IsEmail, IsOptional } from "@nestjs/class-validator";

export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    password: string
}