import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository) { }
    findOne(id: string) {
        console.log(id)
        return this.messagesRepo.findOne(id)
    }
    findAll() {
        return this.messagesRepo.findAll()
    }
    create(content: string) {
        console.log(content)
        return this.messagesRepo.create(content)
    }
}