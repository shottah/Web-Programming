import {User} from './User'
export class Customer extends User {
    constructor (email: string, password: string) {
        super(email, password);
    }
}