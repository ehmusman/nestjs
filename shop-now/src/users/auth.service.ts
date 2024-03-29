import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt} from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt)
@Injectable()
export class AuthService{
    constructor(private userService: UsersService){}

    async signup(email: string, password: string){
        // see if email is in use
        const users = await this.userService.find(email)
        console.log("users", users)
        if(users.length){
            throw new BadRequestException("Email already in use")
        }
        // hash the password 
            // Generate a hash
            const salt = randomBytes(8).toString("hex")
            // Hash the salt and password
            const hash = (await scrypt(password, salt, 32)) as Buffer
            console.log(hash, hash.toString("hex"))
            // Join the hashed result and salt together
            const result = salt + "." + hash.toString("hex")

        // create a new user and save it
        const user = await this.userService.create(email, result)
        // return the user

        return user

    }

    async signin(email: string, password: string){
        const [user] = await this.userService.find(email)
        if(!user){
            throw new NotFoundException('User not found')
        }

        const [salt, storedHash] = user.password.split(".")

        // add this salt with incommig password and check if the password is correct or not

        let hash = (await scrypt(password, salt, 32)) as Buffer

        if(storedHash !== hash.toString("hex")){
            throw new BadRequestException("Incorrect email or password")
        }
        return user

    }
}